# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GmailUsersDraftsCreateRequest{
        Security: operations.GmailUsersDraftsCreateSecurity{
            Option1: &operations.GmailUsersDraftsCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.GmailUsersDraftsCreatePathParams{
            UserID: "rerum",
        },
        QueryParams: operations.GmailUsersDraftsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "provident",
            Alt: "proto",
            Callback: "sapiente",
            Fields: "illum",
            Key: "quas",
            OauthToken: "debitis",
            PrettyPrint: false,
            QuotaUser: "accusantium",
            UploadType: "ad",
            UploadProtocol: "exercitationem",
        },
        Request: &operations.GmailUsersDraftsCreateRequests{
            MessageCpim: []byte("voluptate"),
            MessageDeliveryStatus: []byte("ea"),
            MessageDispositionNotification: []byte("officia"),
            MessageExternalBody: []byte("molestias"),
            MessageFeedbackReport: []byte("tempora"),
            MessageGlobal: []byte("a"),
            MessageGlobalDeliveryStatus: []byte("quos"),
            MessageGlobalDispositionNotification: []byte("illo"),
            MessageGlobalHeaders: []byte("ut"),
            MessageHTTP: []byte("vero"),
            MessageImdnPlusXML: []byte("quia"),
            MessageNews: []byte("quae"),
            MessagePartial: []byte("atque"),
            MessageRfc822: []byte("quibusdam"),
            MessageShttp: []byte("velit"),
            MessageSip: []byte("unde"),
            MessageSipfrag: []byte("dolorum"),
            MessageTrackingStatus: []byte("quae"),
            MessageVndSiSimp: []byte("nam"),
            MessageVndWfaWsc: []byte("voluptate"),
        },
    }
    
    res, err := s.Users.GmailUsersDraftsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Draft != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### users

* `GmailUsersDraftsCreate` - Creates a new draft with the `DRAFT` label.
* `GmailUsersDraftsDelete` - Immediately and permanently deletes the specified draft. Does not simply trash it.
* `GmailUsersDraftsGet` - Gets the specified draft.
* `GmailUsersDraftsList` - Lists the drafts in the user's mailbox.
* `GmailUsersDraftsSend` - Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers.
* `GmailUsersDraftsUpdate` - Replaces a draft's content.
* `GmailUsersGetProfile` - Gets the current user's Gmail profile.
* `GmailUsersHistoryList` - Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing `historyId`).
* `GmailUsersLabelsCreate` - Creates a new label.
* `GmailUsersLabelsDelete` - Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.
* `GmailUsersLabelsGet` - Gets the specified label.
* `GmailUsersLabelsList` - Lists all labels in the user's mailbox.
* `GmailUsersLabelsPatch` - Patch the specified label.
* `GmailUsersLabelsUpdate` - Updates the specified label.
* `GmailUsersMessagesAttachmentsGet` - Gets the specified message attachment.
* `GmailUsersMessagesBatchDelete` - Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.
* `GmailUsersMessagesBatchModify` - Modifies the labels on the specified messages.
* `GmailUsersMessagesDelete` - Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash` instead.
* `GmailUsersMessagesGet` - Gets the specified message.
* `GmailUsersMessagesImport` - Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing. This method does not send a message. Note: This function doesn't trigger forwarding rules or filters set up by the user.
* `GmailUsersMessagesInsert` - Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification. Does not send a message.
* `GmailUsersMessagesList` - Lists the messages in the user's mailbox.
* `GmailUsersMessagesModify` - Modifies the labels on the specified message.
* `GmailUsersMessagesSend` - Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers.
* `GmailUsersMessagesTrash` - Moves the specified message to the trash.
* `GmailUsersMessagesUntrash` - Removes the specified message from the trash.
* `GmailUsersSettingsDelegatesCreate` - Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same G Suite organization as the delegator user. Gmail imposes limitations on the number of delegates and delegators each user in a G Suite organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators. Note that a delegate user must be referred to by their primary email address, and not an email alias. Also note that when a new delegate is created, there may be up to a one minute delay before the new delegate is available for use. This method is only available to service account clients that have been delegated domain-wide authority.
* `GmailUsersSettingsDelegatesDelete` - Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.
* `GmailUsersSettingsDelegatesGet` - Gets the specified delegate. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.
* `GmailUsersSettingsDelegatesList` - Lists the delegates for the specified account. This method is only available to service account clients that have been delegated domain-wide authority.
* `GmailUsersSettingsFiltersCreate` - Creates a filter. Note: you can only create a maximum of 1,000 filters.
* `GmailUsersSettingsFiltersDelete` - Immediately and permanently deletes the specified filter.
* `GmailUsersSettingsFiltersGet` - Gets a filter.
* `GmailUsersSettingsFiltersList` - Lists the message filters of a Gmail user.
* `GmailUsersSettingsForwardingAddressesCreate` - Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. This method is only available to service account clients that have been delegated domain-wide authority.
* `GmailUsersSettingsForwardingAddressesDelete` - Deletes the specified forwarding address and revokes any verification that may have been required. This method is only available to service account clients that have been delegated domain-wide authority.
* `GmailUsersSettingsForwardingAddressesGet` - Gets the specified forwarding address.
* `GmailUsersSettingsForwardingAddressesList` - Lists the forwarding addresses for the specified account.
* `GmailUsersSettingsGetAutoForwarding` - Gets the auto-forwarding setting for the specified account.
* `GmailUsersSettingsGetImap` - Gets IMAP settings.
* `GmailUsersSettingsGetLanguage` - Gets language settings.
* `GmailUsersSettingsGetPop` - Gets POP settings.
* `GmailUsersSettingsGetVacation` - Gets vacation responder settings.
* `GmailUsersSettingsSendAsCreate` - Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. This method is only available to service account clients that have been delegated domain-wide authority.
* `GmailUsersSettingsSendAsDelete` - Deletes the specified send-as alias. Revokes any verification that may have been required for using it. This method is only available to service account clients that have been delegated domain-wide authority.
* `GmailUsersSettingsSendAsGet` - Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.
* `GmailUsersSettingsSendAsList` - Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.
* `GmailUsersSettingsSendAsPatch` - Patch the specified send-as alias.
* `GmailUsersSettingsSendAsSmimeInfoDelete` - Deletes the specified S/MIME config for the specified send-as alias.
* `GmailUsersSettingsSendAsSmimeInfoGet` - Gets the specified S/MIME config for the specified send-as alias.
* `GmailUsersSettingsSendAsSmimeInfoInsert` - Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.
* `GmailUsersSettingsSendAsSmimeInfoList` - Lists S/MIME configs for the specified send-as alias.
* `GmailUsersSettingsSendAsSmimeInfoSetDefault` - Sets the default S/MIME config for the specified send-as alias.
* `GmailUsersSettingsSendAsUpdate` - Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.
* `GmailUsersSettingsSendAsVerify` - Sends a verification email to the specified send-as alias address. The verification status must be `pending`. This method is only available to service account clients that have been delegated domain-wide authority.
* `GmailUsersSettingsUpdateAutoForwarding` - Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled. This method is only available to service account clients that have been delegated domain-wide authority.
* `GmailUsersSettingsUpdateImap` - Updates IMAP settings.
* `GmailUsersSettingsUpdateLanguage` - Updates language settings. If successful, the return object contains the `displayLanguage` that was saved for the user, which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.
* `GmailUsersSettingsUpdatePop` - Updates POP settings.
* `GmailUsersSettingsUpdateVacation` - Updates vacation responder settings.
* `GmailUsersStop` - Stop receiving push notifications for the given user mailbox.
* `GmailUsersThreadsDelete` - Immediately and permanently deletes the specified thread. Any messages that belong to the thread are also deleted. This operation cannot be undone. Prefer `threads.trash` instead.
* `GmailUsersThreadsGet` - Gets the specified thread.
* `GmailUsersThreadsList` - Lists the threads in the user's mailbox.
* `GmailUsersThreadsModify` - Modifies the labels applied to the thread. This applies to all messages in the thread.
* `GmailUsersThreadsTrash` - Moves the specified thread to the trash. Any messages that belong to the thread are also moved to the trash.
* `GmailUsersThreadsUntrash` - Removes the specified thread from the trash. Any messages that belong to the thread are also removed from the trash.
* `GmailUsersWatch` - Set up or update a push notification watch on the given user mailbox.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
