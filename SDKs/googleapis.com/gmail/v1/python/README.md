# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GmailUsersDraftsCreateRequest(
    security=operations.GmailUsersDraftsCreateSecurity(
        option1=operations.GmailUsersDraftsCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.GmailUsersDraftsCreatePathParams(
        user_id="rerum",
    ),
    query_params=operations.GmailUsersDraftsCreateQueryParams(
        dollar_xgafv="2",
        access_token="provident",
        alt="proto",
        callback="sapiente",
        fields="illum",
        key="quas",
        oauth_token="debitis",
        pretty_print=False,
        quota_user="accusantium",
        upload_type="ad",
        upload_protocol="exercitationem",
    ),
    request=operations.GmailUsersDraftsCreateRequests(
        message_cpim="voluptate".encode(),
        message_delivery_status="ea".encode(),
        message_disposition_notification="officia".encode(),
        message_external_body="molestias".encode(),
        message_feedback_report="tempora".encode(),
        message_global="a".encode(),
        message_global_delivery_status="quos".encode(),
        message_global_disposition_notification="illo".encode(),
        message_global_headers="ut".encode(),
        message_http="vero".encode(),
        message_imdn_plus_xml="quia".encode(),
        message_news="quae".encode(),
        message_partial="atque".encode(),
        message_rfc822="quibusdam".encode(),
        message_shttp="velit".encode(),
        message_sip="unde".encode(),
        message_sipfrag="dolorum".encode(),
        message_tracking_status="quae".encode(),
        message_vnd_si_simp="nam".encode(),
        message_vnd_wfa_wsc="voluptate".encode(),
    ),
)
    
res = s.users.gmail_users_drafts_create(req)

if res.draft is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### users

* `gmail_users_drafts_create` - Creates a new draft with the `DRAFT` label.
* `gmail_users_drafts_delete` - Immediately and permanently deletes the specified draft. Does not simply trash it.
* `gmail_users_drafts_get` - Gets the specified draft.
* `gmail_users_drafts_list` - Lists the drafts in the user's mailbox.
* `gmail_users_drafts_send` - Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers.
* `gmail_users_drafts_update` - Replaces a draft's content.
* `gmail_users_get_profile` - Gets the current user's Gmail profile.
* `gmail_users_history_list` - Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing `historyId`).
* `gmail_users_labels_create` - Creates a new label.
* `gmail_users_labels_delete` - Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.
* `gmail_users_labels_get` - Gets the specified label.
* `gmail_users_labels_list` - Lists all labels in the user's mailbox.
* `gmail_users_labels_patch` - Patch the specified label.
* `gmail_users_labels_update` - Updates the specified label.
* `gmail_users_messages_attachments_get` - Gets the specified message attachment.
* `gmail_users_messages_batch_delete` - Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.
* `gmail_users_messages_batch_modify` - Modifies the labels on the specified messages.
* `gmail_users_messages_delete` - Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash` instead.
* `gmail_users_messages_get` - Gets the specified message.
* `gmail_users_messages_import` - Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing. This method does not send a message. Note: This function doesn't trigger forwarding rules or filters set up by the user.
* `gmail_users_messages_insert` - Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification. Does not send a message.
* `gmail_users_messages_list` - Lists the messages in the user's mailbox.
* `gmail_users_messages_modify` - Modifies the labels on the specified message.
* `gmail_users_messages_send` - Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers.
* `gmail_users_messages_trash` - Moves the specified message to the trash.
* `gmail_users_messages_untrash` - Removes the specified message from the trash.
* `gmail_users_settings_delegates_create` - Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same G Suite organization as the delegator user. Gmail imposes limitations on the number of delegates and delegators each user in a G Suite organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators. Note that a delegate user must be referred to by their primary email address, and not an email alias. Also note that when a new delegate is created, there may be up to a one minute delay before the new delegate is available for use. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmail_users_settings_delegates_delete` - Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmail_users_settings_delegates_get` - Gets the specified delegate. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmail_users_settings_delegates_list` - Lists the delegates for the specified account. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmail_users_settings_filters_create` - Creates a filter. Note: you can only create a maximum of 1,000 filters.
* `gmail_users_settings_filters_delete` - Immediately and permanently deletes the specified filter.
* `gmail_users_settings_filters_get` - Gets a filter.
* `gmail_users_settings_filters_list` - Lists the message filters of a Gmail user.
* `gmail_users_settings_forwarding_addresses_create` - Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmail_users_settings_forwarding_addresses_delete` - Deletes the specified forwarding address and revokes any verification that may have been required. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmail_users_settings_forwarding_addresses_get` - Gets the specified forwarding address.
* `gmail_users_settings_forwarding_addresses_list` - Lists the forwarding addresses for the specified account.
* `gmail_users_settings_get_auto_forwarding` - Gets the auto-forwarding setting for the specified account.
* `gmail_users_settings_get_imap` - Gets IMAP settings.
* `gmail_users_settings_get_language` - Gets language settings.
* `gmail_users_settings_get_pop` - Gets POP settings.
* `gmail_users_settings_get_vacation` - Gets vacation responder settings.
* `gmail_users_settings_send_as_create` - Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmail_users_settings_send_as_delete` - Deletes the specified send-as alias. Revokes any verification that may have been required for using it. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmail_users_settings_send_as_get` - Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.
* `gmail_users_settings_send_as_list` - Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.
* `gmail_users_settings_send_as_patch` - Patch the specified send-as alias.
* `gmail_users_settings_send_as_smime_info_delete` - Deletes the specified S/MIME config for the specified send-as alias.
* `gmail_users_settings_send_as_smime_info_get` - Gets the specified S/MIME config for the specified send-as alias.
* `gmail_users_settings_send_as_smime_info_insert` - Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.
* `gmail_users_settings_send_as_smime_info_list` - Lists S/MIME configs for the specified send-as alias.
* `gmail_users_settings_send_as_smime_info_set_default` - Sets the default S/MIME config for the specified send-as alias.
* `gmail_users_settings_send_as_update` - Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.
* `gmail_users_settings_send_as_verify` - Sends a verification email to the specified send-as alias address. The verification status must be `pending`. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmail_users_settings_update_auto_forwarding` - Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled. This method is only available to service account clients that have been delegated domain-wide authority.
* `gmail_users_settings_update_imap` - Updates IMAP settings.
* `gmail_users_settings_update_language` - Updates language settings. If successful, the return object contains the `displayLanguage` that was saved for the user, which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.
* `gmail_users_settings_update_pop` - Updates POP settings.
* `gmail_users_settings_update_vacation` - Updates vacation responder settings.
* `gmail_users_stop` - Stop receiving push notifications for the given user mailbox.
* `gmail_users_threads_delete` - Immediately and permanently deletes the specified thread. Any messages that belong to the thread are also deleted. This operation cannot be undone. Prefer `threads.trash` instead.
* `gmail_users_threads_get` - Gets the specified thread.
* `gmail_users_threads_list` - Lists the threads in the user's mailbox.
* `gmail_users_threads_modify` - Modifies the labels applied to the thread. This applies to all messages in the thread.
* `gmail_users_threads_trash` - Moves the specified thread to the trash. Any messages that belong to the thread are also moved to the trash.
* `gmail_users_threads_untrash` - Removes the specified thread from the trash. Any messages that belong to the thread are also removed from the trash.
* `gmail_users_watch` - Set up or update a push notification watch on the given user mailbox.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
