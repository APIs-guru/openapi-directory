# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { GmailUsersDraftsCreateRequest, GmailUsersDraftsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GmailUsersDraftsCreateRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  pathParams: {
    userId: "rerum",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "provident",
    alt: "proto",
    callback: "sapiente",
    fields: "illum",
    key: "quas",
    oauthToken: "debitis",
    prettyPrint: false,
    quotaUser: "accusantium",
    uploadType: "ad",
    uploadProtocol: "exercitationem",
  },
  request: {
    messageCpim: "voluptate".encode(),
    messageDeliveryStatus: "ea".encode(),
    messageDispositionNotification: "officia".encode(),
    messageExternalBody: "molestias".encode(),
    messageFeedbackReport: "tempora".encode(),
    messageGlobal: "a".encode(),
    messageGlobalDeliveryStatus: "quos".encode(),
    messageGlobalDispositionNotification: "illo".encode(),
    messageGlobalHeaders: "ut".encode(),
    messageHttp: "vero".encode(),
    messageImdnPlusXml: "quia".encode(),
    messageNews: "quae".encode(),
    messagePartial: "atque".encode(),
    messageRfc822: "quibusdam".encode(),
    messageShttp: "velit".encode(),
    messageSip: "unde".encode(),
    messageSipfrag: "dolorum".encode(),
    messageTrackingStatus: "quae".encode(),
    messageVndSiSimp: "nam".encode(),
    messageVndWfaWsc: "voluptate".encode(),
  },
};

sdk.users.gmailUsersDraftsCreate(req).then((res: GmailUsersDraftsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### users

* `gmailUsersDraftsCreate` - Creates a new draft with the `DRAFT` label.
* `gmailUsersDraftsDelete` - Immediately and permanently deletes the specified draft. Does not simply trash it.
* `gmailUsersDraftsGet` - Gets the specified draft.
* `gmailUsersDraftsList` - Lists the drafts in the user's mailbox.
* `gmailUsersDraftsSend` - Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers.
* `gmailUsersDraftsUpdate` - Replaces a draft's content.
* `gmailUsersGetProfile` - Gets the current user's Gmail profile.
* `gmailUsersHistoryList` - Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing `historyId`).
* `gmailUsersLabelsCreate` - Creates a new label.
* `gmailUsersLabelsDelete` - Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.
* `gmailUsersLabelsGet` - Gets the specified label.
* `gmailUsersLabelsList` - Lists all labels in the user's mailbox.
* `gmailUsersLabelsPatch` - Patch the specified label.
* `gmailUsersLabelsUpdate` - Updates the specified label.
* `gmailUsersMessagesAttachmentsGet` - Gets the specified message attachment.
* `gmailUsersMessagesBatchDelete` - Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.
* `gmailUsersMessagesBatchModify` - Modifies the labels on the specified messages.
* `gmailUsersMessagesDelete` - Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash` instead.
* `gmailUsersMessagesGet` - Gets the specified message.
* `gmailUsersMessagesImport` - Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing. This method does not send a message. Note: This function doesn't trigger forwarding rules or filters set up by the user.
* `gmailUsersMessagesInsert` - Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification. Does not send a message.
* `gmailUsersMessagesList` - Lists the messages in the user's mailbox.
* `gmailUsersMessagesModify` - Modifies the labels on the specified message.
* `gmailUsersMessagesSend` - Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers.
* `gmailUsersMessagesTrash` - Moves the specified message to the trash.
* `gmailUsersMessagesUntrash` - Removes the specified message from the trash.
* `gmailUsersSettingsDelegatesCreate` - Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same G Suite organization as the delegator user. Gmail imposes limitations on the number of delegates and delegators each user in a G Suite organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators. Note that a delegate user must be referred to by their primary email address, and not an email alias. Also note that when a new delegate is created, there may be up to a one minute delay before the new delegate is available for use. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmailUsersSettingsDelegatesDelete` - Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmailUsersSettingsDelegatesGet` - Gets the specified delegate. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmailUsersSettingsDelegatesList` - Lists the delegates for the specified account. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmailUsersSettingsFiltersCreate` - Creates a filter. Note: you can only create a maximum of 1,000 filters.
* `gmailUsersSettingsFiltersDelete` - Immediately and permanently deletes the specified filter.
* `gmailUsersSettingsFiltersGet` - Gets a filter.
* `gmailUsersSettingsFiltersList` - Lists the message filters of a Gmail user.
* `gmailUsersSettingsForwardingAddressesCreate` - Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmailUsersSettingsForwardingAddressesDelete` - Deletes the specified forwarding address and revokes any verification that may have been required. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmailUsersSettingsForwardingAddressesGet` - Gets the specified forwarding address.
* `gmailUsersSettingsForwardingAddressesList` - Lists the forwarding addresses for the specified account.
* `gmailUsersSettingsGetAutoForwarding` - Gets the auto-forwarding setting for the specified account.
* `gmailUsersSettingsGetImap` - Gets IMAP settings.
* `gmailUsersSettingsGetLanguage` - Gets language settings.
* `gmailUsersSettingsGetPop` - Gets POP settings.
* `gmailUsersSettingsGetVacation` - Gets vacation responder settings.
* `gmailUsersSettingsSendAsCreate` - Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmailUsersSettingsSendAsDelete` - Deletes the specified send-as alias. Revokes any verification that may have been required for using it. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmailUsersSettingsSendAsGet` - Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.
* `gmailUsersSettingsSendAsList` - Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.
* `gmailUsersSettingsSendAsPatch` - Patch the specified send-as alias.
* `gmailUsersSettingsSendAsSmimeInfoDelete` - Deletes the specified S/MIME config for the specified send-as alias.
* `gmailUsersSettingsSendAsSmimeInfoGet` - Gets the specified S/MIME config for the specified send-as alias.
* `gmailUsersSettingsSendAsSmimeInfoInsert` - Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.
* `gmailUsersSettingsSendAsSmimeInfoList` - Lists S/MIME configs for the specified send-as alias.
* `gmailUsersSettingsSendAsSmimeInfoSetDefault` - Sets the default S/MIME config for the specified send-as alias.
* `gmailUsersSettingsSendAsUpdate` - Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.
* `gmailUsersSettingsSendAsVerify` - Sends a verification email to the specified send-as alias address. The verification status must be `pending`. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmailUsersSettingsUpdateAutoForwarding` - Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmailUsersSettingsUpdateImap` - Updates IMAP settings.
* `gmailUsersSettingsUpdateLanguage` - Updates language settings. If successful, the return object contains the `displayLanguage` that was saved for the user, which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.
* `gmailUsersSettingsUpdatePop` - Updates POP settings.
* `gmailUsersSettingsUpdateVacation` - Updates vacation responder settings.
* `gmailUsersStop` - Stop receiving push notifications for the given user mailbox.
* `gmailUsersThreadsDelete` - Immediately and permanently deletes the specified thread. Any messages that belong to the thread are also deleted. This operation cannot be undone. Prefer `threads.trash` instead.
* `gmailUsersThreadsGet` - Gets the specified thread.
* `gmailUsersThreadsList` - Lists the threads in the user's mailbox.
* `gmailUsersThreadsModify` - Modifies the labels applied to the thread. This applies to all messages in the thread.
* `gmailUsersThreadsTrash` - Moves the specified thread to the trash. Any messages that belong to the thread are also moved to the trash.
* `gmailUsersThreadsUntrash` - Removes the specified thread from the trash. Any messages that belong to the thread are also removed from the trash.
* `gmailUsersWatch` - Set up or update a push notification watch on the given user mailbox.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
