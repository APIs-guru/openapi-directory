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
import { DfareportingAccountActiveAdSummariesGetRequest, DfareportingAccountActiveAdSummariesGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DfareportingAccountActiveAdSummariesGetRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    profileId: "aliquam",
    summaryAccountId: "cumque",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "enim",
    alt: "media",
    callback: "nobis",
    fields: "quo",
    key: "et",
    oauthToken: "est",
    prettyPrint: true,
    quotaUser: "numquam",
    uploadType: "accusamus",
    uploadProtocol: "ipsum",
  },
};

sdk.accountActiveAdSummaries.dfareportingAccountActiveAdSummariesGet(req).then((res: DfareportingAccountActiveAdSummariesGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accountActiveAdSummaries

* `dfareportingAccountActiveAdSummariesGet` - Gets the account's active ad summary by account ID.

### accountPermissionGroups

* `dfareportingAccountPermissionGroupsGet` - Gets one account permission group by ID.
* `dfareportingAccountPermissionGroupsList` - Retrieves the list of account permission groups.

### accountPermissions

* `dfareportingAccountPermissionsGet` - Gets one account permission by ID.
* `dfareportingAccountPermissionsList` - Retrieves the list of account permissions.

### accountUserProfiles

* `dfareportingAccountUserProfilesGet` - Gets one account user profile by ID.
* `dfareportingAccountUserProfilesInsert` - Inserts a new account user profile.
* `dfareportingAccountUserProfilesList` - Retrieves a list of account user profiles, possibly filtered. This method supports paging.
* `dfareportingAccountUserProfilesPatch` - Updates an existing account user profile. This method supports patch semantics.
* `dfareportingAccountUserProfilesUpdate` - Updates an existing account user profile.

### accounts

* `dfareportingAccountsGet` - Gets one account by ID.
* `dfareportingAccountsList` - Retrieves the list of accounts, possibly filtered. This method supports paging.
* `dfareportingAccountsPatch` - Updates an existing account. This method supports patch semantics.
* `dfareportingAccountsUpdate` - Updates an existing account.

### ads

* `dfareportingAdsGet` - Gets one ad by ID.
* `dfareportingAdsInsert` - Inserts a new ad.
* `dfareportingAdsList` - Retrieves a list of ads, possibly filtered. This method supports paging.
* `dfareportingAdsPatch` - Updates an existing ad. This method supports patch semantics.
* `dfareportingAdsUpdate` - Updates an existing ad.

### advertiserGroups

* `dfareportingAdvertiserGroupsDelete` - Deletes an existing advertiser group.
* `dfareportingAdvertiserGroupsGet` - Gets one advertiser group by ID.
* `dfareportingAdvertiserGroupsInsert` - Inserts a new advertiser group.
* `dfareportingAdvertiserGroupsList` - Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
* `dfareportingAdvertiserGroupsPatch` - Updates an existing advertiser group. This method supports patch semantics.
* `dfareportingAdvertiserGroupsUpdate` - Updates an existing advertiser group.

### advertiserLandingPages

* `dfareportingAdvertiserLandingPagesGet` - Gets one landing page by ID.
* `dfareportingAdvertiserLandingPagesInsert` - Inserts a new landing page.
* `dfareportingAdvertiserLandingPagesList` - Retrieves a list of landing pages.
* `dfareportingAdvertiserLandingPagesPatch` - Updates an existing advertiser landing page. This method supports patch semantics.
* `dfareportingAdvertiserLandingPagesUpdate` - Updates an existing landing page.

### advertisers

* `dfareportingAdvertisersGet` - Gets one advertiser by ID.
* `dfareportingAdvertisersInsert` - Inserts a new advertiser.
* `dfareportingAdvertisersList` - Retrieves a list of advertisers, possibly filtered. This method supports paging.
* `dfareportingAdvertisersPatch` - Updates an existing advertiser. This method supports patch semantics.
* `dfareportingAdvertisersUpdate` - Updates an existing advertiser.

### browsers

* `dfareportingBrowsersList` - Retrieves a list of browsers.

### campaignCreativeAssociations

* `dfareportingCampaignCreativeAssociationsInsert` - Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
* `dfareportingCampaignCreativeAssociationsList` - Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.

### campaigns

* `dfareportingCampaignsGet` - Gets one campaign by ID.
* `dfareportingCampaignsInsert` - Inserts a new campaign.
* `dfareportingCampaignsList` - Retrieves a list of campaigns, possibly filtered. This method supports paging.
* `dfareportingCampaignsPatch` - Updates an existing campaign. This method supports patch semantics.
* `dfareportingCampaignsUpdate` - Updates an existing campaign.

### changeLogs

* `dfareportingChangeLogsGet` - Gets one change log by ID.
* `dfareportingChangeLogsList` - Retrieves a list of change logs. This method supports paging.

### cities

* `dfareportingCitiesList` - Retrieves a list of cities, possibly filtered.

### connectionTypes

* `dfareportingConnectionTypesGet` - Gets one connection type by ID.
* `dfareportingConnectionTypesList` - Retrieves a list of connection types.

### contentCategories

* `dfareportingContentCategoriesDelete` - Deletes an existing content category.
* `dfareportingContentCategoriesGet` - Gets one content category by ID.
* `dfareportingContentCategoriesInsert` - Inserts a new content category.
* `dfareportingContentCategoriesList` - Retrieves a list of content categories, possibly filtered. This method supports paging.
* `dfareportingContentCategoriesPatch` - Updates an existing content category. This method supports patch semantics.
* `dfareportingContentCategoriesUpdate` - Updates an existing content category.

### conversions

* `dfareportingConversionsBatchinsert` - Inserts conversions.
* `dfareportingConversionsBatchupdate` - Updates existing conversions.

### countries

* `dfareportingCountriesGet` - Gets one country by ID.
* `dfareportingCountriesList` - Retrieves a list of countries.

### creativeAssets

* `dfareportingCreativeAssetsInsert` - Inserts a new creative asset.

### creativeFieldValues

* `dfareportingCreativeFieldValuesDelete` - Deletes an existing creative field value.
* `dfareportingCreativeFieldValuesGet` - Gets one creative field value by ID.
* `dfareportingCreativeFieldValuesInsert` - Inserts a new creative field value.
* `dfareportingCreativeFieldValuesList` - Retrieves a list of creative field values, possibly filtered. This method supports paging.
* `dfareportingCreativeFieldValuesPatch` - Updates an existing creative field value. This method supports patch semantics.
* `dfareportingCreativeFieldValuesUpdate` - Updates an existing creative field value.

### creativeFields

* `dfareportingCreativeFieldsDelete` - Deletes an existing creative field.
* `dfareportingCreativeFieldsGet` - Gets one creative field by ID.
* `dfareportingCreativeFieldsInsert` - Inserts a new creative field.
* `dfareportingCreativeFieldsList` - Retrieves a list of creative fields, possibly filtered. This method supports paging.
* `dfareportingCreativeFieldsPatch` - Updates an existing creative field. This method supports patch semantics.
* `dfareportingCreativeFieldsUpdate` - Updates an existing creative field.

### creativeGroups

* `dfareportingCreativeGroupsGet` - Gets one creative group by ID.
* `dfareportingCreativeGroupsInsert` - Inserts a new creative group.
* `dfareportingCreativeGroupsList` - Retrieves a list of creative groups, possibly filtered. This method supports paging.
* `dfareportingCreativeGroupsPatch` - Updates an existing creative group. This method supports patch semantics.
* `dfareportingCreativeGroupsUpdate` - Updates an existing creative group.

### creatives

* `dfareportingCreativesGet` - Gets one creative by ID.
* `dfareportingCreativesInsert` - Inserts a new creative.
* `dfareportingCreativesList` - Retrieves a list of creatives, possibly filtered. This method supports paging.
* `dfareportingCreativesPatch` - Updates an existing creative. This method supports patch semantics.
* `dfareportingCreativesUpdate` - Updates an existing creative.

### dimensionValues

* `dfareportingDimensionValuesQuery` - Retrieves list of report dimension values for a list of filters.

### directorySites

* `dfareportingDirectorySitesGet` - Gets one directory site by ID.
* `dfareportingDirectorySitesInsert` - Inserts a new directory site.
* `dfareportingDirectorySitesList` - Retrieves a list of directory sites, possibly filtered. This method supports paging.

### dynamicTargetingKeys

* `dfareportingDynamicTargetingKeysDelete` - Deletes an existing dynamic targeting key.
* `dfareportingDynamicTargetingKeysInsert` - Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
* `dfareportingDynamicTargetingKeysList` - Retrieves a list of dynamic targeting keys.

### eventTags

* `dfareportingEventTagsDelete` - Deletes an existing event tag.
* `dfareportingEventTagsGet` - Gets one event tag by ID.
* `dfareportingEventTagsInsert` - Inserts a new event tag.
* `dfareportingEventTagsList` - Retrieves a list of event tags, possibly filtered.
* `dfareportingEventTagsPatch` - Updates an existing event tag. This method supports patch semantics.
* `dfareportingEventTagsUpdate` - Updates an existing event tag.

### files

* `dfareportingFilesGet` - Retrieves a report file by its report ID and file ID. This method supports media download.
* `dfareportingFilesList` - Lists files for a user profile.

### floodlightActivities

* `dfareportingFloodlightActivitiesDelete` - Deletes an existing floodlight activity.
* `dfareportingFloodlightActivitiesGeneratetag` - Generates a tag for a floodlight activity.
* `dfareportingFloodlightActivitiesGet` - Gets one floodlight activity by ID.
* `dfareportingFloodlightActivitiesInsert` - Inserts a new floodlight activity.
* `dfareportingFloodlightActivitiesList` - Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
* `dfareportingFloodlightActivitiesPatch` - Updates an existing floodlight activity. This method supports patch semantics.
* `dfareportingFloodlightActivitiesUpdate` - Updates an existing floodlight activity.

### floodlightActivityGroups

* `dfareportingFloodlightActivityGroupsGet` - Gets one floodlight activity group by ID.
* `dfareportingFloodlightActivityGroupsInsert` - Inserts a new floodlight activity group.
* `dfareportingFloodlightActivityGroupsList` - Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
* `dfareportingFloodlightActivityGroupsPatch` - Updates an existing floodlight activity group. This method supports patch semantics.
* `dfareportingFloodlightActivityGroupsUpdate` - Updates an existing floodlight activity group.

### floodlightConfigurations

* `dfareportingFloodlightConfigurationsGet` - Gets one floodlight configuration by ID.
* `dfareportingFloodlightConfigurationsList` - Retrieves a list of floodlight configurations, possibly filtered.
* `dfareportingFloodlightConfigurationsPatch` - Updates an existing floodlight configuration. This method supports patch semantics.
* `dfareportingFloodlightConfigurationsUpdate` - Updates an existing floodlight configuration.

### inventoryItems

* `dfareportingInventoryItemsGet` - Gets one inventory item by ID.
* `dfareportingInventoryItemsList` - Retrieves a list of inventory items, possibly filtered. This method supports paging.

### languages

* `dfareportingLanguagesList` - Retrieves a list of languages.

### metros

* `dfareportingMetrosList` - Retrieves a list of metros.

### mobileApps

* `dfareportingMobileAppsGet` - Gets one mobile app by ID.
* `dfareportingMobileAppsList` - Retrieves list of available mobile apps.

### mobileCarriers

* `dfareportingMobileCarriersGet` - Gets one mobile carrier by ID.
* `dfareportingMobileCarriersList` - Retrieves a list of mobile carriers.

### operatingSystemVersions

* `dfareportingOperatingSystemVersionsGet` - Gets one operating system version by ID.
* `dfareportingOperatingSystemVersionsList` - Retrieves a list of operating system versions.

### operatingSystems

* `dfareportingOperatingSystemsGet` - Gets one operating system by DART ID.
* `dfareportingOperatingSystemsList` - Retrieves a list of operating systems.

### orderDocuments

* `dfareportingOrderDocumentsGet` - Gets one order document by ID.
* `dfareportingOrderDocumentsList` - Retrieves a list of order documents, possibly filtered. This method supports paging.

### orders

* `dfareportingOrdersGet` - Gets one order by ID.
* `dfareportingOrdersList` - Retrieves a list of orders, possibly filtered. This method supports paging.

### placementGroups

* `dfareportingPlacementGroupsGet` - Gets one placement group by ID.
* `dfareportingPlacementGroupsInsert` - Inserts a new placement group.
* `dfareportingPlacementGroupsList` - Retrieves a list of placement groups, possibly filtered. This method supports paging.
* `dfareportingPlacementGroupsPatch` - Updates an existing placement group. This method supports patch semantics.
* `dfareportingPlacementGroupsUpdate` - Updates an existing placement group.

### placementStrategies

* `dfareportingPlacementStrategiesDelete` - Deletes an existing placement strategy.
* `dfareportingPlacementStrategiesGet` - Gets one placement strategy by ID.
* `dfareportingPlacementStrategiesInsert` - Inserts a new placement strategy.
* `dfareportingPlacementStrategiesList` - Retrieves a list of placement strategies, possibly filtered. This method supports paging.
* `dfareportingPlacementStrategiesPatch` - Updates an existing placement strategy. This method supports patch semantics.
* `dfareportingPlacementStrategiesUpdate` - Updates an existing placement strategy.

### placements

* `dfareportingPlacementsGeneratetags` - Generates tags for a placement.
* `dfareportingPlacementsGet` - Gets one placement by ID.
* `dfareportingPlacementsInsert` - Inserts a new placement.
* `dfareportingPlacementsList` - Retrieves a list of placements, possibly filtered. This method supports paging.
* `dfareportingPlacementsPatch` - Updates an existing placement. This method supports patch semantics.
* `dfareportingPlacementsUpdate` - Updates an existing placement.

### platformTypes

* `dfareportingPlatformTypesGet` - Gets one platform type by ID.
* `dfareportingPlatformTypesList` - Retrieves a list of platform types.

### postalCodes

* `dfareportingPostalCodesGet` - Gets one postal code by ID.
* `dfareportingPostalCodesList` - Retrieves a list of postal codes.

### projects

* `dfareportingProjectsGet` - Gets one project by ID.
* `dfareportingProjectsList` - Retrieves a list of projects, possibly filtered. This method supports paging .

### regions

* `dfareportingRegionsList` - Retrieves a list of regions.

### remarketingListShares

* `dfareportingRemarketingListSharesGet` - Gets one remarketing list share by remarketing list ID.
* `dfareportingRemarketingListSharesPatch` - Updates an existing remarketing list share. This method supports patch semantics.
* `dfareportingRemarketingListSharesUpdate` - Updates an existing remarketing list share.

### remarketingLists

* `dfareportingRemarketingListsGet` - Gets one remarketing list by ID.
* `dfareportingRemarketingListsInsert` - Inserts a new remarketing list.
* `dfareportingRemarketingListsList` - Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
* `dfareportingRemarketingListsPatch` - Updates an existing remarketing list. This method supports patch semantics.
* `dfareportingRemarketingListsUpdate` - Updates an existing remarketing list.

### reports

* `dfareportingReportsCompatibleFieldsQuery` - Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
* `dfareportingReportsDelete` - Deletes a report by its ID.
* `dfareportingReportsFilesGet` - Retrieves a report file by its report ID and file ID. This method supports media download.
* `dfareportingReportsFilesList` - Lists files for a report.
* `dfareportingReportsGet` - Retrieves a report by its ID.
* `dfareportingReportsInsert` - Creates a report.
* `dfareportingReportsList` - Retrieves list of reports.
* `dfareportingReportsPatch` - Updates an existing report. This method supports patch semantics.
* `dfareportingReportsRun` - Runs a report.
* `dfareportingReportsUpdate` - Updates a report.

### sites

* `dfareportingSitesGet` - Gets one site by ID.
* `dfareportingSitesInsert` - Inserts a new site.
* `dfareportingSitesList` - Retrieves a list of sites, possibly filtered. This method supports paging.
* `dfareportingSitesPatch` - Updates an existing site. This method supports patch semantics.
* `dfareportingSitesUpdate` - Updates an existing site.

### sizes

* `dfareportingSizesGet` - Gets one size by ID.
* `dfareportingSizesInsert` - Inserts a new size.
* `dfareportingSizesList` - Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.

### subaccounts

* `dfareportingSubaccountsGet` - Gets one subaccount by ID.
* `dfareportingSubaccountsInsert` - Inserts a new subaccount.
* `dfareportingSubaccountsList` - Gets a list of subaccounts, possibly filtered. This method supports paging.
* `dfareportingSubaccountsPatch` - Updates an existing subaccount. This method supports patch semantics.
* `dfareportingSubaccountsUpdate` - Updates an existing subaccount.

### targetableRemarketingLists

* `dfareportingTargetableRemarketingListsGet` - Gets one remarketing list by ID.
* `dfareportingTargetableRemarketingListsList` - Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.

### targetingTemplates

* `dfareportingTargetingTemplatesGet` - Gets one targeting template by ID.
* `dfareportingTargetingTemplatesInsert` - Inserts a new targeting template.
* `dfareportingTargetingTemplatesList` - Retrieves a list of targeting templates, optionally filtered. This method supports paging.
* `dfareportingTargetingTemplatesPatch` - Updates an existing targeting template. This method supports patch semantics.
* `dfareportingTargetingTemplatesUpdate` - Updates an existing targeting template.

### userProfiles

* `dfareportingUserProfilesGet` - Gets one user profile by ID.
* `dfareportingUserProfilesList` - Retrieves list of user profiles for a user.

### userRolePermissionGroups

* `dfareportingUserRolePermissionGroupsGet` - Gets one user role permission group by ID.
* `dfareportingUserRolePermissionGroupsList` - Gets a list of all supported user role permission groups.

### userRolePermissions

* `dfareportingUserRolePermissionsGet` - Gets one user role permission by ID.
* `dfareportingUserRolePermissionsList` - Gets a list of user role permissions, possibly filtered.

### userRoles

* `dfareportingUserRolesDelete` - Deletes an existing user role.
* `dfareportingUserRolesGet` - Gets one user role by ID.
* `dfareportingUserRolesInsert` - Inserts a new user role.
* `dfareportingUserRolesList` - Retrieves a list of user roles, possibly filtered. This method supports paging.
* `dfareportingUserRolesPatch` - Updates an existing user role. This method supports patch semantics.
* `dfareportingUserRolesUpdate` - Updates an existing user role.

### videoFormats

* `dfareportingVideoFormatsGet` - Gets one video format by ID.
* `dfareportingVideoFormatsList` - Lists available video formats.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
