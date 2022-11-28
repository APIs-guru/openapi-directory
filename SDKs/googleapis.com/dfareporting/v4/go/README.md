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
    
    req := operations.DfareportingAccountActiveAdSummariesGetRequest{
        Security: operations.DfareportingAccountActiveAdSummariesGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DfareportingAccountActiveAdSummariesGetPathParams{
            ProfileID: "nulla",
            SummaryAccountID: "beatae",
        },
        QueryParams: operations.DfareportingAccountActiveAdSummariesGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "repellat",
            Alt: "proto",
            Callback: "id",
            Fields: "nesciunt",
            Key: "et",
            OauthToken: "ut",
            PrettyPrint: true,
            QuotaUser: "nisi",
            UploadType: "maiores",
            UploadProtocol: "mollitia",
        },
    }
    
    res, err := s.AccountActiveAdSummaries.DfareportingAccountActiveAdSummariesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountActiveAdSummary != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accountActiveAdSummaries

* `DfareportingAccountActiveAdSummariesGet` - Gets the account's active ad summary by account ID.

### accountPermissionGroups

* `DfareportingAccountPermissionGroupsGet` - Gets one account permission group by ID.
* `DfareportingAccountPermissionGroupsList` - Retrieves the list of account permission groups.

### accountPermissions

* `DfareportingAccountPermissionsGet` - Gets one account permission by ID.
* `DfareportingAccountPermissionsList` - Retrieves the list of account permissions.

### accountUserProfiles

* `DfareportingAccountUserProfilesGet` - Gets one account user profile by ID.
* `DfareportingAccountUserProfilesInsert` - Inserts a new account user profile.
* `DfareportingAccountUserProfilesList` - Retrieves a list of account user profiles, possibly filtered. This method supports paging.
* `DfareportingAccountUserProfilesPatch` - Updates an existing account user profile. This method supports patch semantics.
* `DfareportingAccountUserProfilesUpdate` - Updates an existing account user profile.

### accounts

* `DfareportingAccountsGet` - Gets one account by ID.
* `DfareportingAccountsList` - Retrieves the list of accounts, possibly filtered. This method supports paging.
* `DfareportingAccountsPatch` - Updates an existing account. This method supports patch semantics.
* `DfareportingAccountsUpdate` - Updates an existing account.

### ads

* `DfareportingAdsGet` - Gets one ad by ID.
* `DfareportingAdsInsert` - Inserts a new ad.
* `DfareportingAdsList` - Retrieves a list of ads, possibly filtered. This method supports paging.
* `DfareportingAdsPatch` - Updates an existing ad. This method supports patch semantics.
* `DfareportingAdsUpdate` - Updates an existing ad.

### advertiserGroups

* `DfareportingAdvertiserGroupsDelete` - Deletes an existing advertiser group.
* `DfareportingAdvertiserGroupsGet` - Gets one advertiser group by ID.
* `DfareportingAdvertiserGroupsInsert` - Inserts a new advertiser group.
* `DfareportingAdvertiserGroupsList` - Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
* `DfareportingAdvertiserGroupsPatch` - Updates an existing advertiser group. This method supports patch semantics.
* `DfareportingAdvertiserGroupsUpdate` - Updates an existing advertiser group.

### advertiserInvoices

* `DfareportingAdvertiserInvoicesList` - Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level.

### advertiserLandingPages

* `DfareportingAdvertiserLandingPagesGet` - Gets one landing page by ID.
* `DfareportingAdvertiserLandingPagesInsert` - Inserts a new landing page.
* `DfareportingAdvertiserLandingPagesList` - Retrieves a list of landing pages.
* `DfareportingAdvertiserLandingPagesPatch` - Updates an existing advertiser landing page. This method supports patch semantics.
* `DfareportingAdvertiserLandingPagesUpdate` - Updates an existing landing page.

### advertisers

* `DfareportingAdvertisersGet` - Gets one advertiser by ID.
* `DfareportingAdvertisersInsert` - Inserts a new advertiser.
* `DfareportingAdvertisersList` - Retrieves a list of advertisers, possibly filtered. This method supports paging.
* `DfareportingAdvertisersPatch` - Updates an existing advertiser. This method supports patch semantics.
* `DfareportingAdvertisersUpdate` - Updates an existing advertiser.

### billingAssignments

* `DfareportingBillingAssignmentsInsert` - Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned.
* `DfareportingBillingAssignmentsList` - Retrieves a list of billing assignments.

### billingProfiles

* `DfareportingBillingProfilesGet` - Gets one billing profile by ID.
* `DfareportingBillingProfilesList` - Retrieves a list of billing profiles, possibly filtered. This method supports paging.
* `DfareportingBillingProfilesUpdate` - Updates an existing billing profile.

### billingRates

* `DfareportingBillingRatesList` - Retrieves a list of billing rates. This method supports paging.

### browsers

* `DfareportingBrowsersList` - Retrieves a list of browsers.

### campaignCreativeAssociations

* `DfareportingCampaignCreativeAssociationsInsert` - Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
* `DfareportingCampaignCreativeAssociationsList` - Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.

### campaigns

* `DfareportingCampaignsGet` - Gets one campaign by ID.
* `DfareportingCampaignsInsert` - Inserts a new campaign.
* `DfareportingCampaignsList` - Retrieves a list of campaigns, possibly filtered. This method supports paging.
* `DfareportingCampaignsPatch` - Updates an existing campaign. This method supports patch semantics.
* `DfareportingCampaignsUpdate` - Updates an existing campaign.

### changeLogs

* `DfareportingChangeLogsGet` - Gets one change log by ID.
* `DfareportingChangeLogsList` - Retrieves a list of change logs. This method supports paging.

### cities

* `DfareportingCitiesList` - Retrieves a list of cities, possibly filtered.

### connectionTypes

* `DfareportingConnectionTypesGet` - Gets one connection type by ID.
* `DfareportingConnectionTypesList` - Retrieves a list of connection types.

### contentCategories

* `DfareportingContentCategoriesDelete` - Deletes an existing content category.
* `DfareportingContentCategoriesGet` - Gets one content category by ID.
* `DfareportingContentCategoriesInsert` - Inserts a new content category.
* `DfareportingContentCategoriesList` - Retrieves a list of content categories, possibly filtered. This method supports paging.
* `DfareportingContentCategoriesPatch` - Updates an existing content category. This method supports patch semantics.
* `DfareportingContentCategoriesUpdate` - Updates an existing content category.

### conversions

* `DfareportingConversionsBatchinsert` - Inserts conversions.
* `DfareportingConversionsBatchupdate` - Updates existing conversions.

### countries

* `DfareportingCountriesGet` - Gets one country by ID.
* `DfareportingCountriesList` - Retrieves a list of countries.

### creativeAssets

* `DfareportingCreativeAssetsInsert` - Inserts a new creative asset.

### creativeFieldValues

* `DfareportingCreativeFieldValuesDelete` - Deletes an existing creative field value.
* `DfareportingCreativeFieldValuesGet` - Gets one creative field value by ID.
* `DfareportingCreativeFieldValuesInsert` - Inserts a new creative field value.
* `DfareportingCreativeFieldValuesList` - Retrieves a list of creative field values, possibly filtered. This method supports paging.
* `DfareportingCreativeFieldValuesPatch` - Updates an existing creative field value. This method supports patch semantics.
* `DfareportingCreativeFieldValuesUpdate` - Updates an existing creative field value.

### creativeFields

* `DfareportingCreativeFieldsDelete` - Deletes an existing creative field.
* `DfareportingCreativeFieldsGet` - Gets one creative field by ID.
* `DfareportingCreativeFieldsInsert` - Inserts a new creative field.
* `DfareportingCreativeFieldsList` - Retrieves a list of creative fields, possibly filtered. This method supports paging.
* `DfareportingCreativeFieldsPatch` - Updates an existing creative field. This method supports patch semantics.
* `DfareportingCreativeFieldsUpdate` - Updates an existing creative field.

### creativeGroups

* `DfareportingCreativeGroupsGet` - Gets one creative group by ID.
* `DfareportingCreativeGroupsInsert` - Inserts a new creative group.
* `DfareportingCreativeGroupsList` - Retrieves a list of creative groups, possibly filtered. This method supports paging.
* `DfareportingCreativeGroupsPatch` - Updates an existing creative group. This method supports patch semantics.
* `DfareportingCreativeGroupsUpdate` - Updates an existing creative group.

### creatives

* `DfareportingCreativesGet` - Gets one creative by ID.
* `DfareportingCreativesInsert` - Inserts a new creative.
* `DfareportingCreativesList` - Retrieves a list of creatives, possibly filtered. This method supports paging.
* `DfareportingCreativesPatch` - Updates an existing creative. This method supports patch semantics.
* `DfareportingCreativesUpdate` - Updates an existing creative.

### dimensionValues

* `DfareportingDimensionValuesQuery` - Retrieves list of report dimension values for a list of filters.

### directorySites

* `DfareportingDirectorySitesGet` - Gets one directory site by ID.
* `DfareportingDirectorySitesInsert` - Inserts a new directory site.
* `DfareportingDirectorySitesList` - Retrieves a list of directory sites, possibly filtered. This method supports paging.

### dynamicTargetingKeys

* `DfareportingDynamicTargetingKeysDelete` - Deletes an existing dynamic targeting key.
* `DfareportingDynamicTargetingKeysInsert` - Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
* `DfareportingDynamicTargetingKeysList` - Retrieves a list of dynamic targeting keys.

### eventTags

* `DfareportingEventTagsDelete` - Deletes an existing event tag.
* `DfareportingEventTagsGet` - Gets one event tag by ID.
* `DfareportingEventTagsInsert` - Inserts a new event tag.
* `DfareportingEventTagsList` - Retrieves a list of event tags, possibly filtered.
* `DfareportingEventTagsPatch` - Updates an existing event tag. This method supports patch semantics.
* `DfareportingEventTagsUpdate` - Updates an existing event tag.

### files

* `DfareportingFilesGet` - Retrieves a report file by its report ID and file ID. This method supports media download.
* `DfareportingFilesList` - Lists files for a user profile.

### floodlightActivities

* `DfareportingFloodlightActivitiesDelete` - Deletes an existing floodlight activity.
* `DfareportingFloodlightActivitiesGeneratetag` - Generates a tag for a floodlight activity.
* `DfareportingFloodlightActivitiesGet` - Gets one floodlight activity by ID.
* `DfareportingFloodlightActivitiesInsert` - Inserts a new floodlight activity.
* `DfareportingFloodlightActivitiesList` - Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
* `DfareportingFloodlightActivitiesPatch` - Updates an existing floodlight activity. This method supports patch semantics.
* `DfareportingFloodlightActivitiesUpdate` - Updates an existing floodlight activity.

### floodlightActivityGroups

* `DfareportingFloodlightActivityGroupsGet` - Gets one floodlight activity group by ID.
* `DfareportingFloodlightActivityGroupsInsert` - Inserts a new floodlight activity group.
* `DfareportingFloodlightActivityGroupsList` - Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
* `DfareportingFloodlightActivityGroupsPatch` - Updates an existing floodlight activity group. This method supports patch semantics.
* `DfareportingFloodlightActivityGroupsUpdate` - Updates an existing floodlight activity group.

### floodlightConfigurations

* `DfareportingFloodlightConfigurationsGet` - Gets one floodlight configuration by ID.
* `DfareportingFloodlightConfigurationsList` - Retrieves a list of floodlight configurations, possibly filtered.
* `DfareportingFloodlightConfigurationsPatch` - Updates an existing floodlight configuration. This method supports patch semantics.
* `DfareportingFloodlightConfigurationsUpdate` - Updates an existing floodlight configuration.

### inventoryItems

* `DfareportingInventoryItemsGet` - Gets one inventory item by ID.
* `DfareportingInventoryItemsList` - Retrieves a list of inventory items, possibly filtered. This method supports paging.

### languages

* `DfareportingLanguagesList` - Retrieves a list of languages.

### metros

* `DfareportingMetrosList` - Retrieves a list of metros.

### mobileApps

* `DfareportingMobileAppsGet` - Gets one mobile app by ID.
* `DfareportingMobileAppsList` - Retrieves list of available mobile apps.

### mobileCarriers

* `DfareportingMobileCarriersGet` - Gets one mobile carrier by ID.
* `DfareportingMobileCarriersList` - Retrieves a list of mobile carriers.

### operatingSystemVersions

* `DfareportingOperatingSystemVersionsGet` - Gets one operating system version by ID.
* `DfareportingOperatingSystemVersionsList` - Retrieves a list of operating system versions.

### operatingSystems

* `DfareportingOperatingSystemsGet` - Gets one operating system by DART ID.
* `DfareportingOperatingSystemsList` - Retrieves a list of operating systems.

### orderDocuments

* `DfareportingOrderDocumentsGet` - Gets one order document by ID.
* `DfareportingOrderDocumentsList` - Retrieves a list of order documents, possibly filtered. This method supports paging.

### orders

* `DfareportingOrdersGet` - Gets one order by ID.
* `DfareportingOrdersList` - Retrieves a list of orders, possibly filtered. This method supports paging.

### placementGroups

* `DfareportingPlacementGroupsGet` - Gets one placement group by ID.
* `DfareportingPlacementGroupsInsert` - Inserts a new placement group.
* `DfareportingPlacementGroupsList` - Retrieves a list of placement groups, possibly filtered. This method supports paging.
* `DfareportingPlacementGroupsPatch` - Updates an existing placement group. This method supports patch semantics.
* `DfareportingPlacementGroupsUpdate` - Updates an existing placement group.

### placementStrategies

* `DfareportingPlacementStrategiesDelete` - Deletes an existing placement strategy.
* `DfareportingPlacementStrategiesGet` - Gets one placement strategy by ID.
* `DfareportingPlacementStrategiesInsert` - Inserts a new placement strategy.
* `DfareportingPlacementStrategiesList` - Retrieves a list of placement strategies, possibly filtered. This method supports paging.
* `DfareportingPlacementStrategiesPatch` - Updates an existing placement strategy. This method supports patch semantics.
* `DfareportingPlacementStrategiesUpdate` - Updates an existing placement strategy.

### placements

* `DfareportingPlacementsGeneratetags` - Generates tags for a placement.
* `DfareportingPlacementsGet` - Gets one placement by ID.
* `DfareportingPlacementsInsert` - Inserts a new placement.
* `DfareportingPlacementsList` - Retrieves a list of placements, possibly filtered. This method supports paging.
* `DfareportingPlacementsPatch` - Updates an existing placement. This method supports patch semantics.
* `DfareportingPlacementsUpdate` - Updates an existing placement.

### platformTypes

* `DfareportingPlatformTypesGet` - Gets one platform type by ID.
* `DfareportingPlatformTypesList` - Retrieves a list of platform types.

### postalCodes

* `DfareportingPostalCodesGet` - Gets one postal code by ID.
* `DfareportingPostalCodesList` - Retrieves a list of postal codes.

### projects

* `DfareportingProjectsGet` - Gets one project by ID.
* `DfareportingProjectsList` - Retrieves a list of projects, possibly filtered. This method supports paging .

### regions

* `DfareportingRegionsList` - Retrieves a list of regions.

### remarketingListShares

* `DfareportingRemarketingListSharesGet` - Gets one remarketing list share by remarketing list ID.
* `DfareportingRemarketingListSharesPatch` - Updates an existing remarketing list share. This method supports patch semantics.
* `DfareportingRemarketingListSharesUpdate` - Updates an existing remarketing list share.

### remarketingLists

* `DfareportingRemarketingListsGet` - Gets one remarketing list by ID.
* `DfareportingRemarketingListsInsert` - Inserts a new remarketing list.
* `DfareportingRemarketingListsList` - Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
* `DfareportingRemarketingListsPatch` - Updates an existing remarketing list. This method supports patch semantics.
* `DfareportingRemarketingListsUpdate` - Updates an existing remarketing list.

### reports

* `DfareportingReportsCompatibleFieldsQuery` - Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
* `DfareportingReportsDelete` - Deletes a report by its ID.
* `DfareportingReportsFilesGet` - Retrieves a report file by its report ID and file ID. This method supports media download.
* `DfareportingReportsFilesList` - Lists files for a report.
* `DfareportingReportsGet` - Retrieves a report by its ID.
* `DfareportingReportsInsert` - Creates a report.
* `DfareportingReportsList` - Retrieves list of reports.
* `DfareportingReportsPatch` - Updates an existing report. This method supports patch semantics.
* `DfareportingReportsRun` - Runs a report.
* `DfareportingReportsUpdate` - Updates a report.

### sites

* `DfareportingSitesGet` - Gets one site by ID.
* `DfareportingSitesInsert` - Inserts a new site.
* `DfareportingSitesList` - Retrieves a list of sites, possibly filtered. This method supports paging.
* `DfareportingSitesPatch` - Updates an existing site. This method supports patch semantics.
* `DfareportingSitesUpdate` - Updates an existing site.

### sizes

* `DfareportingSizesGet` - Gets one size by ID.
* `DfareportingSizesInsert` - Inserts a new size.
* `DfareportingSizesList` - Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.

### subaccounts

* `DfareportingSubaccountsGet` - Gets one subaccount by ID.
* `DfareportingSubaccountsInsert` - Inserts a new subaccount.
* `DfareportingSubaccountsList` - Gets a list of subaccounts, possibly filtered. This method supports paging.
* `DfareportingSubaccountsPatch` - Updates an existing subaccount. This method supports patch semantics.
* `DfareportingSubaccountsUpdate` - Updates an existing subaccount.

### targetableRemarketingLists

* `DfareportingTargetableRemarketingListsGet` - Gets one remarketing list by ID.
* `DfareportingTargetableRemarketingListsList` - Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.

### targetingTemplates

* `DfareportingTargetingTemplatesGet` - Gets one targeting template by ID.
* `DfareportingTargetingTemplatesInsert` - Inserts a new targeting template.
* `DfareportingTargetingTemplatesList` - Retrieves a list of targeting templates, optionally filtered. This method supports paging.
* `DfareportingTargetingTemplatesPatch` - Updates an existing targeting template. This method supports patch semantics.
* `DfareportingTargetingTemplatesUpdate` - Updates an existing targeting template.

### userProfiles

* `DfareportingUserProfilesGet` - Gets one user profile by ID.
* `DfareportingUserProfilesList` - Retrieves list of user profiles for a user.

### userRolePermissionGroups

* `DfareportingUserRolePermissionGroupsGet` - Gets one user role permission group by ID.
* `DfareportingUserRolePermissionGroupsList` - Gets a list of all supported user role permission groups.

### userRolePermissions

* `DfareportingUserRolePermissionsGet` - Gets one user role permission by ID.
* `DfareportingUserRolePermissionsList` - Gets a list of user role permissions, possibly filtered.

### userRoles

* `DfareportingUserRolesDelete` - Deletes an existing user role.
* `DfareportingUserRolesGet` - Gets one user role by ID.
* `DfareportingUserRolesInsert` - Inserts a new user role.
* `DfareportingUserRolesList` - Retrieves a list of user roles, possibly filtered. This method supports paging.
* `DfareportingUserRolesPatch` - Updates an existing user role. This method supports patch semantics.
* `DfareportingUserRolesUpdate` - Updates an existing user role.

### videoFormats

* `DfareportingVideoFormatsGet` - Gets one video format by ID.
* `DfareportingVideoFormatsList` - Lists available video formats.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
