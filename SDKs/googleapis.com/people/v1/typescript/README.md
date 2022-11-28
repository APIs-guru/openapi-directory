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
import { PeopleContactGroupsBatchGetRequest, PeopleContactGroupsBatchGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PeopleContactGroupsBatchGetRequest = {
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
  queryParams: {
    dollarXgafv: "1",
    accessToken: "quia",
    alt: "media",
    callback: "nihil",
    fields: "et",
    groupFields: "dolor",
    key: "et",
    maxMembers: 9176577634530861449,
    oauthToken: "blanditiis",
    prettyPrint: true,
    quotaUser: "atque",
    resourceNames: [
      "hic",
      "eum",
    ],
    uploadType: "sint",
    uploadProtocol: "sint",
  },
};

sdk.contactGroups.peopleContactGroupsBatchGet(req).then((res: PeopleContactGroupsBatchGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### contactGroups

* `peopleContactGroupsBatchGet` - Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names.
* `peopleContactGroupsCreate` - Create a new contact group owned by the authenticated user. Created contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* `peopleContactGroupsDelete` - Delete an existing contact group owned by the authenticated user by specifying a contact group resource name. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* `peopleContactGroupsList` - List all contact groups owned by the authenticated user. Members of the contact groups are not populated.
* `peopleContactGroupsMembersModify` - Modify the members of a contact group owned by the authenticated user. The only system contact groups that can have members added are `contactGroups/myContacts` and `contactGroups/starred`. Other system contact groups are deprecated and can only have contacts removed.
* `peopleContactGroupsUpdate` - Update the name of an existing contact group owned by the authenticated user. Updated contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### otherContacts

* `peopleOtherContactsCopyOtherContactToMyContactsGroup` - Copies an "Other contact" to a new contact in the user's "myContacts" group Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* `peopleOtherContactsList` - List all "Other contacts", that is contacts that are not in a contact group. "Other contacts" are typically auto created contacts from interactions. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's other contacts that have changed](/people/v1/other-contacts#list_the_users_other_contacts_that_have_changed).
* `peopleOtherContactsSearch` - Provides a list of contacts in the authenticated user's other contacts that matches the search query. The query matches on a contact's `names`, `emailAddresses`, and `phoneNumbers` fields that are from the OTHER_CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/other-contacts#search_the_users_other_contacts

### people

* `peoplePeopleBatchCreateContacts` - Create a batch of new contacts and return the PersonResponses for the newly Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* `peoplePeopleBatchDeleteContacts` - Delete a batch of contacts. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* `peoplePeopleBatchUpdateContacts` - Update a batch of contacts and return a map of resource names to PersonResponses for the updated contacts. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* `peoplePeopleConnectionsList` - Provides a list of the authenticated user's contacts. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's contacts that have changed](/people/v1/contacts#list_the_users_contacts_that_have_changed).
* `peoplePeopleCreateContact` - Create a new contact and return the person resource for that contact. The request returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* `peoplePeopleDeleteContact` - Delete a contact person. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* `peoplePeopleDeleteContactPhoto` - Delete a contact's photo. Mutate requests for the same user should be done sequentially to avoid // lock contention.
* `peoplePeopleGet` - Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.
* `peoplePeopleGetBatchGet` - Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.
* `peoplePeopleListDirectoryPeople` - Provides a list of domain profiles and domain contacts in the authenticated user's domain directory. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the directory people that have changed](/people/v1/directory#list_the_directory_people_that_have_changed).
* `peoplePeopleSearchContacts` - Provides a list of contacts in the authenticated user's grouped contacts that matches the search query. The query matches on a contact's `names`, `nickNames`, `emailAddresses`, `phoneNumbers`, and `organizations` fields that are from the CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/contacts#search_the_users_contacts
* `peoplePeopleSearchDirectoryPeople` - Provides a list of domain profiles and domain contacts in the authenticated user's domain directory that match the search query.
* `peoplePeopleUpdateContact` - Update contact data for an existing contact person. Any non-contact data will not be modified. Any non-contact data in the person to update will be ignored. All fields specified in the `update_mask` will be replaced. The server returns a 400 error if `person.metadata.sources` is not specified for the contact to be updated or if there is no contact source. The server returns a 400 error with reason `"failedPrecondition"` if `person.metadata.sources.etag` is different than the contact's etag, which indicates the contact has changed since its data was read. Clients should get the latest person and merge their updates into the latest person. The server returns a 400 error if `memberships` are being updated and there are no contact group memberships specified on the person. The server returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* `peoplePeopleUpdateContactPhoto` - Update a contact's photo. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
