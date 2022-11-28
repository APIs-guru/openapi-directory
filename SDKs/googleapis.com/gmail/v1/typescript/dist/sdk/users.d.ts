import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gmailUsersDraftsCreate - Creates a new draft with the `DRAFT` label.
    **/
    gmailUsersDraftsCreate(req: operations.GmailUsersDraftsCreateRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersDraftsCreateResponse>;
    /**
     * gmailUsersDraftsDelete - Immediately and permanently deletes the specified draft. Does not simply trash it.
    **/
    gmailUsersDraftsDelete(req: operations.GmailUsersDraftsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersDraftsDeleteResponse>;
    /**
     * gmailUsersDraftsGet - Gets the specified draft.
    **/
    gmailUsersDraftsGet(req: operations.GmailUsersDraftsGetRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersDraftsGetResponse>;
    /**
     * gmailUsersDraftsList - Lists the drafts in the user's mailbox.
    **/
    gmailUsersDraftsList(req: operations.GmailUsersDraftsListRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersDraftsListResponse>;
    /**
     * gmailUsersDraftsSend - Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers.
    **/
    gmailUsersDraftsSend(req: operations.GmailUsersDraftsSendRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersDraftsSendResponse>;
    /**
     * gmailUsersDraftsUpdate - Replaces a draft's content.
    **/
    gmailUsersDraftsUpdate(req: operations.GmailUsersDraftsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersDraftsUpdateResponse>;
    /**
     * gmailUsersGetProfile - Gets the current user's Gmail profile.
    **/
    gmailUsersGetProfile(req: operations.GmailUsersGetProfileRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersGetProfileResponse>;
    /**
     * gmailUsersHistoryList - Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing `historyId`).
    **/
    gmailUsersHistoryList(req: operations.GmailUsersHistoryListRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersHistoryListResponse>;
    /**
     * gmailUsersLabelsCreate - Creates a new label.
    **/
    gmailUsersLabelsCreate(req: operations.GmailUsersLabelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersLabelsCreateResponse>;
    /**
     * gmailUsersLabelsDelete - Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.
    **/
    gmailUsersLabelsDelete(req: operations.GmailUsersLabelsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersLabelsDeleteResponse>;
    /**
     * gmailUsersLabelsGet - Gets the specified label.
    **/
    gmailUsersLabelsGet(req: operations.GmailUsersLabelsGetRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersLabelsGetResponse>;
    /**
     * gmailUsersLabelsList - Lists all labels in the user's mailbox.
    **/
    gmailUsersLabelsList(req: operations.GmailUsersLabelsListRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersLabelsListResponse>;
    /**
     * gmailUsersLabelsPatch - Patch the specified label.
    **/
    gmailUsersLabelsPatch(req: operations.GmailUsersLabelsPatchRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersLabelsPatchResponse>;
    /**
     * gmailUsersLabelsUpdate - Updates the specified label.
    **/
    gmailUsersLabelsUpdate(req: operations.GmailUsersLabelsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersLabelsUpdateResponse>;
    /**
     * gmailUsersMessagesAttachmentsGet - Gets the specified message attachment.
    **/
    gmailUsersMessagesAttachmentsGet(req: operations.GmailUsersMessagesAttachmentsGetRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersMessagesAttachmentsGetResponse>;
    /**
     * gmailUsersMessagesBatchDelete - Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.
    **/
    gmailUsersMessagesBatchDelete(req: operations.GmailUsersMessagesBatchDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersMessagesBatchDeleteResponse>;
    /**
     * gmailUsersMessagesBatchModify - Modifies the labels on the specified messages.
    **/
    gmailUsersMessagesBatchModify(req: operations.GmailUsersMessagesBatchModifyRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersMessagesBatchModifyResponse>;
    /**
     * gmailUsersMessagesDelete - Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash` instead.
    **/
    gmailUsersMessagesDelete(req: operations.GmailUsersMessagesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersMessagesDeleteResponse>;
    /**
     * gmailUsersMessagesGet - Gets the specified message.
    **/
    gmailUsersMessagesGet(req: operations.GmailUsersMessagesGetRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersMessagesGetResponse>;
    /**
     * gmailUsersMessagesImport - Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing. This method does not send a message. Note: This function doesn't trigger forwarding rules or filters set up by the user.
    **/
    gmailUsersMessagesImport(req: operations.GmailUsersMessagesImportRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersMessagesImportResponse>;
    /**
     * gmailUsersMessagesInsert - Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification. Does not send a message.
    **/
    gmailUsersMessagesInsert(req: operations.GmailUsersMessagesInsertRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersMessagesInsertResponse>;
    /**
     * gmailUsersMessagesList - Lists the messages in the user's mailbox.
    **/
    gmailUsersMessagesList(req: operations.GmailUsersMessagesListRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersMessagesListResponse>;
    /**
     * gmailUsersMessagesModify - Modifies the labels on the specified message.
    **/
    gmailUsersMessagesModify(req: operations.GmailUsersMessagesModifyRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersMessagesModifyResponse>;
    /**
     * gmailUsersMessagesSend - Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers.
    **/
    gmailUsersMessagesSend(req: operations.GmailUsersMessagesSendRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersMessagesSendResponse>;
    /**
     * gmailUsersMessagesTrash - Moves the specified message to the trash.
    **/
    gmailUsersMessagesTrash(req: operations.GmailUsersMessagesTrashRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersMessagesTrashResponse>;
    /**
     * gmailUsersMessagesUntrash - Removes the specified message from the trash.
    **/
    gmailUsersMessagesUntrash(req: operations.GmailUsersMessagesUntrashRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersMessagesUntrashResponse>;
    /**
     * gmailUsersSettingsDelegatesCreate - Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same G Suite organization as the delegator user. Gmail imposes limitations on the number of delegates and delegators each user in a G Suite organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators. Note that a delegate user must be referred to by their primary email address, and not an email alias. Also note that when a new delegate is created, there may be up to a one minute delay before the new delegate is available for use. This method is only available to service account clients that have been delegated domain-wide authority.
    **/
    gmailUsersSettingsDelegatesCreate(req: operations.GmailUsersSettingsDelegatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsDelegatesCreateResponse>;
    /**
     * gmailUsersSettingsDelegatesDelete - Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.
    **/
    gmailUsersSettingsDelegatesDelete(req: operations.GmailUsersSettingsDelegatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsDelegatesDeleteResponse>;
    /**
     * gmailUsersSettingsDelegatesGet - Gets the specified delegate. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.
    **/
    gmailUsersSettingsDelegatesGet(req: operations.GmailUsersSettingsDelegatesGetRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsDelegatesGetResponse>;
    /**
     * gmailUsersSettingsDelegatesList - Lists the delegates for the specified account. This method is only available to service account clients that have been delegated domain-wide authority.
    **/
    gmailUsersSettingsDelegatesList(req: operations.GmailUsersSettingsDelegatesListRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsDelegatesListResponse>;
    /**
     * gmailUsersSettingsFiltersCreate - Creates a filter. Note: you can only create a maximum of 1,000 filters.
    **/
    gmailUsersSettingsFiltersCreate(req: operations.GmailUsersSettingsFiltersCreateRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsFiltersCreateResponse>;
    /**
     * gmailUsersSettingsFiltersDelete - Immediately and permanently deletes the specified filter.
    **/
    gmailUsersSettingsFiltersDelete(req: operations.GmailUsersSettingsFiltersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsFiltersDeleteResponse>;
    /**
     * gmailUsersSettingsFiltersGet - Gets a filter.
    **/
    gmailUsersSettingsFiltersGet(req: operations.GmailUsersSettingsFiltersGetRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsFiltersGetResponse>;
    /**
     * gmailUsersSettingsFiltersList - Lists the message filters of a Gmail user.
    **/
    gmailUsersSettingsFiltersList(req: operations.GmailUsersSettingsFiltersListRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsFiltersListResponse>;
    /**
     * gmailUsersSettingsForwardingAddressesCreate - Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. This method is only available to service account clients that have been delegated domain-wide authority.
    **/
    gmailUsersSettingsForwardingAddressesCreate(req: operations.GmailUsersSettingsForwardingAddressesCreateRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsForwardingAddressesCreateResponse>;
    /**
     * gmailUsersSettingsForwardingAddressesDelete - Deletes the specified forwarding address and revokes any verification that may have been required. This method is only available to service account clients that have been delegated domain-wide authority.
    **/
    gmailUsersSettingsForwardingAddressesDelete(req: operations.GmailUsersSettingsForwardingAddressesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsForwardingAddressesDeleteResponse>;
    /**
     * gmailUsersSettingsForwardingAddressesGet - Gets the specified forwarding address.
    **/
    gmailUsersSettingsForwardingAddressesGet(req: operations.GmailUsersSettingsForwardingAddressesGetRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsForwardingAddressesGetResponse>;
    /**
     * gmailUsersSettingsForwardingAddressesList - Lists the forwarding addresses for the specified account.
    **/
    gmailUsersSettingsForwardingAddressesList(req: operations.GmailUsersSettingsForwardingAddressesListRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsForwardingAddressesListResponse>;
    /**
     * gmailUsersSettingsGetAutoForwarding - Gets the auto-forwarding setting for the specified account.
    **/
    gmailUsersSettingsGetAutoForwarding(req: operations.GmailUsersSettingsGetAutoForwardingRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsGetAutoForwardingResponse>;
    /**
     * gmailUsersSettingsGetImap - Gets IMAP settings.
    **/
    gmailUsersSettingsGetImap(req: operations.GmailUsersSettingsGetImapRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsGetImapResponse>;
    /**
     * gmailUsersSettingsGetLanguage - Gets language settings.
    **/
    gmailUsersSettingsGetLanguage(req: operations.GmailUsersSettingsGetLanguageRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsGetLanguageResponse>;
    /**
     * gmailUsersSettingsGetPop - Gets POP settings.
    **/
    gmailUsersSettingsGetPop(req: operations.GmailUsersSettingsGetPopRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsGetPopResponse>;
    /**
     * gmailUsersSettingsGetVacation - Gets vacation responder settings.
    **/
    gmailUsersSettingsGetVacation(req: operations.GmailUsersSettingsGetVacationRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsGetVacationResponse>;
    /**
     * gmailUsersSettingsSendAsCreate - Creates a custom "from" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. This method is only available to service account clients that have been delegated domain-wide authority.
    **/
    gmailUsersSettingsSendAsCreate(req: operations.GmailUsersSettingsSendAsCreateRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsSendAsCreateResponse>;
    /**
     * gmailUsersSettingsSendAsDelete - Deletes the specified send-as alias. Revokes any verification that may have been required for using it. This method is only available to service account clients that have been delegated domain-wide authority.
    **/
    gmailUsersSettingsSendAsDelete(req: operations.GmailUsersSettingsSendAsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsSendAsDeleteResponse>;
    /**
     * gmailUsersSettingsSendAsGet - Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.
    **/
    gmailUsersSettingsSendAsGet(req: operations.GmailUsersSettingsSendAsGetRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsSendAsGetResponse>;
    /**
     * gmailUsersSettingsSendAsList - Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom "from" aliases.
    **/
    gmailUsersSettingsSendAsList(req: operations.GmailUsersSettingsSendAsListRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsSendAsListResponse>;
    /**
     * gmailUsersSettingsSendAsPatch - Patch the specified send-as alias.
    **/
    gmailUsersSettingsSendAsPatch(req: operations.GmailUsersSettingsSendAsPatchRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsSendAsPatchResponse>;
    /**
     * gmailUsersSettingsSendAsSmimeInfoDelete - Deletes the specified S/MIME config for the specified send-as alias.
    **/
    gmailUsersSettingsSendAsSmimeInfoDelete(req: operations.GmailUsersSettingsSendAsSmimeInfoDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsSendAsSmimeInfoDeleteResponse>;
    /**
     * gmailUsersSettingsSendAsSmimeInfoGet - Gets the specified S/MIME config for the specified send-as alias.
    **/
    gmailUsersSettingsSendAsSmimeInfoGet(req: operations.GmailUsersSettingsSendAsSmimeInfoGetRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsSendAsSmimeInfoGetResponse>;
    /**
     * gmailUsersSettingsSendAsSmimeInfoInsert - Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.
    **/
    gmailUsersSettingsSendAsSmimeInfoInsert(req: operations.GmailUsersSettingsSendAsSmimeInfoInsertRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsSendAsSmimeInfoInsertResponse>;
    /**
     * gmailUsersSettingsSendAsSmimeInfoList - Lists S/MIME configs for the specified send-as alias.
    **/
    gmailUsersSettingsSendAsSmimeInfoList(req: operations.GmailUsersSettingsSendAsSmimeInfoListRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsSendAsSmimeInfoListResponse>;
    /**
     * gmailUsersSettingsSendAsSmimeInfoSetDefault - Sets the default S/MIME config for the specified send-as alias.
    **/
    gmailUsersSettingsSendAsSmimeInfoSetDefault(req: operations.GmailUsersSettingsSendAsSmimeInfoSetDefaultRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsSendAsSmimeInfoSetDefaultResponse>;
    /**
     * gmailUsersSettingsSendAsUpdate - Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.
    **/
    gmailUsersSettingsSendAsUpdate(req: operations.GmailUsersSettingsSendAsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsSendAsUpdateResponse>;
    /**
     * gmailUsersSettingsSendAsVerify - Sends a verification email to the specified send-as alias address. The verification status must be `pending`. This method is only available to service account clients that have been delegated domain-wide authority.
    **/
    gmailUsersSettingsSendAsVerify(req: operations.GmailUsersSettingsSendAsVerifyRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsSendAsVerifyResponse>;
    /**
     * gmailUsersSettingsUpdateAutoForwarding - Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled. This method is only available to service account clients that have been delegated domain-wide authority.
    **/
    gmailUsersSettingsUpdateAutoForwarding(req: operations.GmailUsersSettingsUpdateAutoForwardingRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsUpdateAutoForwardingResponse>;
    /**
     * gmailUsersSettingsUpdateImap - Updates IMAP settings.
    **/
    gmailUsersSettingsUpdateImap(req: operations.GmailUsersSettingsUpdateImapRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsUpdateImapResponse>;
    /**
     * gmailUsersSettingsUpdateLanguage - Updates language settings. If successful, the return object contains the `displayLanguage` that was saved for the user, which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.
    **/
    gmailUsersSettingsUpdateLanguage(req: operations.GmailUsersSettingsUpdateLanguageRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsUpdateLanguageResponse>;
    /**
     * gmailUsersSettingsUpdatePop - Updates POP settings.
    **/
    gmailUsersSettingsUpdatePop(req: operations.GmailUsersSettingsUpdatePopRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsUpdatePopResponse>;
    /**
     * gmailUsersSettingsUpdateVacation - Updates vacation responder settings.
    **/
    gmailUsersSettingsUpdateVacation(req: operations.GmailUsersSettingsUpdateVacationRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersSettingsUpdateVacationResponse>;
    /**
     * gmailUsersStop - Stop receiving push notifications for the given user mailbox.
    **/
    gmailUsersStop(req: operations.GmailUsersStopRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersStopResponse>;
    /**
     * gmailUsersThreadsDelete - Immediately and permanently deletes the specified thread. Any messages that belong to the thread are also deleted. This operation cannot be undone. Prefer `threads.trash` instead.
    **/
    gmailUsersThreadsDelete(req: operations.GmailUsersThreadsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersThreadsDeleteResponse>;
    /**
     * gmailUsersThreadsGet - Gets the specified thread.
    **/
    gmailUsersThreadsGet(req: operations.GmailUsersThreadsGetRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersThreadsGetResponse>;
    /**
     * gmailUsersThreadsList - Lists the threads in the user's mailbox.
    **/
    gmailUsersThreadsList(req: operations.GmailUsersThreadsListRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersThreadsListResponse>;
    /**
     * gmailUsersThreadsModify - Modifies the labels applied to the thread. This applies to all messages in the thread.
    **/
    gmailUsersThreadsModify(req: operations.GmailUsersThreadsModifyRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersThreadsModifyResponse>;
    /**
     * gmailUsersThreadsTrash - Moves the specified thread to the trash. Any messages that belong to the thread are also moved to the trash.
    **/
    gmailUsersThreadsTrash(req: operations.GmailUsersThreadsTrashRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersThreadsTrashResponse>;
    /**
     * gmailUsersThreadsUntrash - Removes the specified thread from the trash. Any messages that belong to the thread are also removed from the trash.
    **/
    gmailUsersThreadsUntrash(req: operations.GmailUsersThreadsUntrashRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersThreadsUntrashResponse>;
    /**
     * gmailUsersWatch - Set up or update a push notification watch on the given user mailbox.
    **/
    gmailUsersWatch(req: operations.GmailUsersWatchRequest, config?: AxiosRequestConfig): Promise<operations.GmailUsersWatchResponse>;
}
