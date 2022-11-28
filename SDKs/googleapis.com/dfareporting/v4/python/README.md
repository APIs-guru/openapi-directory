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
    
req = operations.DfareportingAccountActiveAdSummariesGetRequest(
    security=operations.DfareportingAccountActiveAdSummariesGetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DfareportingAccountActiveAdSummariesGetPathParams(
        profile_id="nulla",
        summary_account_id="beatae",
    ),
    query_params=operations.DfareportingAccountActiveAdSummariesGetQueryParams(
        dollar_xgafv="1",
        access_token="repellat",
        alt="proto",
        callback="id",
        fields="nesciunt",
        key="et",
        oauth_token="ut",
        pretty_print=True,
        quota_user="nisi",
        upload_type="maiores",
        upload_protocol="mollitia",
    ),
)
    
res = s.account_active_ad_summaries.dfareporting_account_active_ad_summaries_get(req)

if res.account_active_ad_summary is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### accountActiveAdSummaries

* `dfareporting_account_active_ad_summaries_get` - Gets the account's active ad summary by account ID.

### accountPermissionGroups

* `dfareporting_account_permission_groups_get` - Gets one account permission group by ID.
* `dfareporting_account_permission_groups_list` - Retrieves the list of account permission groups.

### accountPermissions

* `dfareporting_account_permissions_get` - Gets one account permission by ID.
* `dfareporting_account_permissions_list` - Retrieves the list of account permissions.

### accountUserProfiles

* `dfareporting_account_user_profiles_get` - Gets one account user profile by ID.
* `dfareporting_account_user_profiles_insert` - Inserts a new account user profile.
* `dfareporting_account_user_profiles_list` - Retrieves a list of account user profiles, possibly filtered. This method supports paging.
* `dfareporting_account_user_profiles_patch` - Updates an existing account user profile. This method supports patch semantics.
* `dfareporting_account_user_profiles_update` - Updates an existing account user profile.

### accounts

* `dfareporting_accounts_get` - Gets one account by ID.
* `dfareporting_accounts_list` - Retrieves the list of accounts, possibly filtered. This method supports paging.
* `dfareporting_accounts_patch` - Updates an existing account. This method supports patch semantics.
* `dfareporting_accounts_update` - Updates an existing account.

### ads

* `dfareporting_ads_get` - Gets one ad by ID.
* `dfareporting_ads_insert` - Inserts a new ad.
* `dfareporting_ads_list` - Retrieves a list of ads, possibly filtered. This method supports paging.
* `dfareporting_ads_patch` - Updates an existing ad. This method supports patch semantics.
* `dfareporting_ads_update` - Updates an existing ad.

### advertiserGroups

* `dfareporting_advertiser_groups_delete` - Deletes an existing advertiser group.
* `dfareporting_advertiser_groups_get` - Gets one advertiser group by ID.
* `dfareporting_advertiser_groups_insert` - Inserts a new advertiser group.
* `dfareporting_advertiser_groups_list` - Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
* `dfareporting_advertiser_groups_patch` - Updates an existing advertiser group. This method supports patch semantics.
* `dfareporting_advertiser_groups_update` - Updates an existing advertiser group.

### advertiserInvoices

* `dfareporting_advertiser_invoices_list` - Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level.

### advertiserLandingPages

* `dfareporting_advertiser_landing_pages_get` - Gets one landing page by ID.
* `dfareporting_advertiser_landing_pages_insert` - Inserts a new landing page.
* `dfareporting_advertiser_landing_pages_list` - Retrieves a list of landing pages.
* `dfareporting_advertiser_landing_pages_patch` - Updates an existing advertiser landing page. This method supports patch semantics.
* `dfareporting_advertiser_landing_pages_update` - Updates an existing landing page.

### advertisers

* `dfareporting_advertisers_get` - Gets one advertiser by ID.
* `dfareporting_advertisers_insert` - Inserts a new advertiser.
* `dfareporting_advertisers_list` - Retrieves a list of advertisers, possibly filtered. This method supports paging.
* `dfareporting_advertisers_patch` - Updates an existing advertiser. This method supports patch semantics.
* `dfareporting_advertisers_update` - Updates an existing advertiser.

### billingAssignments

* `dfareporting_billing_assignments_insert` - Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned.
* `dfareporting_billing_assignments_list` - Retrieves a list of billing assignments.

### billingProfiles

* `dfareporting_billing_profiles_get` - Gets one billing profile by ID.
* `dfareporting_billing_profiles_list` - Retrieves a list of billing profiles, possibly filtered. This method supports paging.
* `dfareporting_billing_profiles_update` - Updates an existing billing profile.

### billingRates

* `dfareporting_billing_rates_list` - Retrieves a list of billing rates. This method supports paging.

### browsers

* `dfareporting_browsers_list` - Retrieves a list of browsers.

### campaignCreativeAssociations

* `dfareporting_campaign_creative_associations_insert` - Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
* `dfareporting_campaign_creative_associations_list` - Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.

### campaigns

* `dfareporting_campaigns_get` - Gets one campaign by ID.
* `dfareporting_campaigns_insert` - Inserts a new campaign.
* `dfareporting_campaigns_list` - Retrieves a list of campaigns, possibly filtered. This method supports paging.
* `dfareporting_campaigns_patch` - Updates an existing campaign. This method supports patch semantics.
* `dfareporting_campaigns_update` - Updates an existing campaign.

### changeLogs

* `dfareporting_change_logs_get` - Gets one change log by ID.
* `dfareporting_change_logs_list` - Retrieves a list of change logs. This method supports paging.

### cities

* `dfareporting_cities_list` - Retrieves a list of cities, possibly filtered.

### connectionTypes

* `dfareporting_connection_types_get` - Gets one connection type by ID.
* `dfareporting_connection_types_list` - Retrieves a list of connection types.

### contentCategories

* `dfareporting_content_categories_delete` - Deletes an existing content category.
* `dfareporting_content_categories_get` - Gets one content category by ID.
* `dfareporting_content_categories_insert` - Inserts a new content category.
* `dfareporting_content_categories_list` - Retrieves a list of content categories, possibly filtered. This method supports paging.
* `dfareporting_content_categories_patch` - Updates an existing content category. This method supports patch semantics.
* `dfareporting_content_categories_update` - Updates an existing content category.

### conversions

* `dfareporting_conversions_batchinsert` - Inserts conversions.
* `dfareporting_conversions_batchupdate` - Updates existing conversions.

### countries

* `dfareporting_countries_get` - Gets one country by ID.
* `dfareporting_countries_list` - Retrieves a list of countries.

### creativeAssets

* `dfareporting_creative_assets_insert` - Inserts a new creative asset.

### creativeFieldValues

* `dfareporting_creative_field_values_delete` - Deletes an existing creative field value.
* `dfareporting_creative_field_values_get` - Gets one creative field value by ID.
* `dfareporting_creative_field_values_insert` - Inserts a new creative field value.
* `dfareporting_creative_field_values_list` - Retrieves a list of creative field values, possibly filtered. This method supports paging.
* `dfareporting_creative_field_values_patch` - Updates an existing creative field value. This method supports patch semantics.
* `dfareporting_creative_field_values_update` - Updates an existing creative field value.

### creativeFields

* `dfareporting_creative_fields_delete` - Deletes an existing creative field.
* `dfareporting_creative_fields_get` - Gets one creative field by ID.
* `dfareporting_creative_fields_insert` - Inserts a new creative field.
* `dfareporting_creative_fields_list` - Retrieves a list of creative fields, possibly filtered. This method supports paging.
* `dfareporting_creative_fields_patch` - Updates an existing creative field. This method supports patch semantics.
* `dfareporting_creative_fields_update` - Updates an existing creative field.

### creativeGroups

* `dfareporting_creative_groups_get` - Gets one creative group by ID.
* `dfareporting_creative_groups_insert` - Inserts a new creative group.
* `dfareporting_creative_groups_list` - Retrieves a list of creative groups, possibly filtered. This method supports paging.
* `dfareporting_creative_groups_patch` - Updates an existing creative group. This method supports patch semantics.
* `dfareporting_creative_groups_update` - Updates an existing creative group.

### creatives

* `dfareporting_creatives_get` - Gets one creative by ID.
* `dfareporting_creatives_insert` - Inserts a new creative.
* `dfareporting_creatives_list` - Retrieves a list of creatives, possibly filtered. This method supports paging.
* `dfareporting_creatives_patch` - Updates an existing creative. This method supports patch semantics.
* `dfareporting_creatives_update` - Updates an existing creative.

### dimensionValues

* `dfareporting_dimension_values_query` - Retrieves list of report dimension values for a list of filters.

### directorySites

* `dfareporting_directory_sites_get` - Gets one directory site by ID.
* `dfareporting_directory_sites_insert` - Inserts a new directory site.
* `dfareporting_directory_sites_list` - Retrieves a list of directory sites, possibly filtered. This method supports paging.

### dynamicTargetingKeys

* `dfareporting_dynamic_targeting_keys_delete` - Deletes an existing dynamic targeting key.
* `dfareporting_dynamic_targeting_keys_insert` - Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
* `dfareporting_dynamic_targeting_keys_list` - Retrieves a list of dynamic targeting keys.

### eventTags

* `dfareporting_event_tags_delete` - Deletes an existing event tag.
* `dfareporting_event_tags_get` - Gets one event tag by ID.
* `dfareporting_event_tags_insert` - Inserts a new event tag.
* `dfareporting_event_tags_list` - Retrieves a list of event tags, possibly filtered.
* `dfareporting_event_tags_patch` - Updates an existing event tag. This method supports patch semantics.
* `dfareporting_event_tags_update` - Updates an existing event tag.

### files

* `dfareporting_files_get` - Retrieves a report file by its report ID and file ID. This method supports media download.
* `dfareporting_files_list` - Lists files for a user profile.

### floodlightActivities

* `dfareporting_floodlight_activities_delete` - Deletes an existing floodlight activity.
* `dfareporting_floodlight_activities_generatetag` - Generates a tag for a floodlight activity.
* `dfareporting_floodlight_activities_get` - Gets one floodlight activity by ID.
* `dfareporting_floodlight_activities_insert` - Inserts a new floodlight activity.
* `dfareporting_floodlight_activities_list` - Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
* `dfareporting_floodlight_activities_patch` - Updates an existing floodlight activity. This method supports patch semantics.
* `dfareporting_floodlight_activities_update` - Updates an existing floodlight activity.

### floodlightActivityGroups

* `dfareporting_floodlight_activity_groups_get` - Gets one floodlight activity group by ID.
* `dfareporting_floodlight_activity_groups_insert` - Inserts a new floodlight activity group.
* `dfareporting_floodlight_activity_groups_list` - Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
* `dfareporting_floodlight_activity_groups_patch` - Updates an existing floodlight activity group. This method supports patch semantics.
* `dfareporting_floodlight_activity_groups_update` - Updates an existing floodlight activity group.

### floodlightConfigurations

* `dfareporting_floodlight_configurations_get` - Gets one floodlight configuration by ID.
* `dfareporting_floodlight_configurations_list` - Retrieves a list of floodlight configurations, possibly filtered.
* `dfareporting_floodlight_configurations_patch` - Updates an existing floodlight configuration. This method supports patch semantics.
* `dfareporting_floodlight_configurations_update` - Updates an existing floodlight configuration.

### inventoryItems

* `dfareporting_inventory_items_get` - Gets one inventory item by ID.
* `dfareporting_inventory_items_list` - Retrieves a list of inventory items, possibly filtered. This method supports paging.

### languages

* `dfareporting_languages_list` - Retrieves a list of languages.

### metros

* `dfareporting_metros_list` - Retrieves a list of metros.

### mobileApps

* `dfareporting_mobile_apps_get` - Gets one mobile app by ID.
* `dfareporting_mobile_apps_list` - Retrieves list of available mobile apps.

### mobileCarriers

* `dfareporting_mobile_carriers_get` - Gets one mobile carrier by ID.
* `dfareporting_mobile_carriers_list` - Retrieves a list of mobile carriers.

### operatingSystemVersions

* `dfareporting_operating_system_versions_get` - Gets one operating system version by ID.
* `dfareporting_operating_system_versions_list` - Retrieves a list of operating system versions.

### operatingSystems

* `dfareporting_operating_systems_get` - Gets one operating system by DART ID.
* `dfareporting_operating_systems_list` - Retrieves a list of operating systems.

### orderDocuments

* `dfareporting_order_documents_get` - Gets one order document by ID.
* `dfareporting_order_documents_list` - Retrieves a list of order documents, possibly filtered. This method supports paging.

### orders

* `dfareporting_orders_get` - Gets one order by ID.
* `dfareporting_orders_list` - Retrieves a list of orders, possibly filtered. This method supports paging.

### placementGroups

* `dfareporting_placement_groups_get` - Gets one placement group by ID.
* `dfareporting_placement_groups_insert` - Inserts a new placement group.
* `dfareporting_placement_groups_list` - Retrieves a list of placement groups, possibly filtered. This method supports paging.
* `dfareporting_placement_groups_patch` - Updates an existing placement group. This method supports patch semantics.
* `dfareporting_placement_groups_update` - Updates an existing placement group.

### placementStrategies

* `dfareporting_placement_strategies_delete` - Deletes an existing placement strategy.
* `dfareporting_placement_strategies_get` - Gets one placement strategy by ID.
* `dfareporting_placement_strategies_insert` - Inserts a new placement strategy.
* `dfareporting_placement_strategies_list` - Retrieves a list of placement strategies, possibly filtered. This method supports paging.
* `dfareporting_placement_strategies_patch` - Updates an existing placement strategy. This method supports patch semantics.
* `dfareporting_placement_strategies_update` - Updates an existing placement strategy.

### placements

* `dfareporting_placements_generatetags` - Generates tags for a placement.
* `dfareporting_placements_get` - Gets one placement by ID.
* `dfareporting_placements_insert` - Inserts a new placement.
* `dfareporting_placements_list` - Retrieves a list of placements, possibly filtered. This method supports paging.
* `dfareporting_placements_patch` - Updates an existing placement. This method supports patch semantics.
* `dfareporting_placements_update` - Updates an existing placement.

### platformTypes

* `dfareporting_platform_types_get` - Gets one platform type by ID.
* `dfareporting_platform_types_list` - Retrieves a list of platform types.

### postalCodes

* `dfareporting_postal_codes_get` - Gets one postal code by ID.
* `dfareporting_postal_codes_list` - Retrieves a list of postal codes.

### projects

* `dfareporting_projects_get` - Gets one project by ID.
* `dfareporting_projects_list` - Retrieves a list of projects, possibly filtered. This method supports paging .

### regions

* `dfareporting_regions_list` - Retrieves a list of regions.

### remarketingListShares

* `dfareporting_remarketing_list_shares_get` - Gets one remarketing list share by remarketing list ID.
* `dfareporting_remarketing_list_shares_patch` - Updates an existing remarketing list share. This method supports patch semantics.
* `dfareporting_remarketing_list_shares_update` - Updates an existing remarketing list share.

### remarketingLists

* `dfareporting_remarketing_lists_get` - Gets one remarketing list by ID.
* `dfareporting_remarketing_lists_insert` - Inserts a new remarketing list.
* `dfareporting_remarketing_lists_list` - Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
* `dfareporting_remarketing_lists_patch` - Updates an existing remarketing list. This method supports patch semantics.
* `dfareporting_remarketing_lists_update` - Updates an existing remarketing list.

### reports

* `dfareporting_reports_compatible_fields_query` - Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
* `dfareporting_reports_delete` - Deletes a report by its ID.
* `dfareporting_reports_files_get` - Retrieves a report file by its report ID and file ID. This method supports media download.
* `dfareporting_reports_files_list` - Lists files for a report.
* `dfareporting_reports_get` - Retrieves a report by its ID.
* `dfareporting_reports_insert` - Creates a report.
* `dfareporting_reports_list` - Retrieves list of reports.
* `dfareporting_reports_patch` - Updates an existing report. This method supports patch semantics.
* `dfareporting_reports_run` - Runs a report.
* `dfareporting_reports_update` - Updates a report.

### sites

* `dfareporting_sites_get` - Gets one site by ID.
* `dfareporting_sites_insert` - Inserts a new site.
* `dfareporting_sites_list` - Retrieves a list of sites, possibly filtered. This method supports paging.
* `dfareporting_sites_patch` - Updates an existing site. This method supports patch semantics.
* `dfareporting_sites_update` - Updates an existing site.

### sizes

* `dfareporting_sizes_get` - Gets one size by ID.
* `dfareporting_sizes_insert` - Inserts a new size.
* `dfareporting_sizes_list` - Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.

### subaccounts

* `dfareporting_subaccounts_get` - Gets one subaccount by ID.
* `dfareporting_subaccounts_insert` - Inserts a new subaccount.
* `dfareporting_subaccounts_list` - Gets a list of subaccounts, possibly filtered. This method supports paging.
* `dfareporting_subaccounts_patch` - Updates an existing subaccount. This method supports patch semantics.
* `dfareporting_subaccounts_update` - Updates an existing subaccount.

### targetableRemarketingLists

* `dfareporting_targetable_remarketing_lists_get` - Gets one remarketing list by ID.
* `dfareporting_targetable_remarketing_lists_list` - Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.

### targetingTemplates

* `dfareporting_targeting_templates_get` - Gets one targeting template by ID.
* `dfareporting_targeting_templates_insert` - Inserts a new targeting template.
* `dfareporting_targeting_templates_list` - Retrieves a list of targeting templates, optionally filtered. This method supports paging.
* `dfareporting_targeting_templates_patch` - Updates an existing targeting template. This method supports patch semantics.
* `dfareporting_targeting_templates_update` - Updates an existing targeting template.

### userProfiles

* `dfareporting_user_profiles_get` - Gets one user profile by ID.
* `dfareporting_user_profiles_list` - Retrieves list of user profiles for a user.

### userRolePermissionGroups

* `dfareporting_user_role_permission_groups_get` - Gets one user role permission group by ID.
* `dfareporting_user_role_permission_groups_list` - Gets a list of all supported user role permission groups.

### userRolePermissions

* `dfareporting_user_role_permissions_get` - Gets one user role permission by ID.
* `dfareporting_user_role_permissions_list` - Gets a list of user role permissions, possibly filtered.

### userRoles

* `dfareporting_user_roles_delete` - Deletes an existing user role.
* `dfareporting_user_roles_get` - Gets one user role by ID.
* `dfareporting_user_roles_insert` - Inserts a new user role.
* `dfareporting_user_roles_list` - Retrieves a list of user roles, possibly filtered. This method supports paging.
* `dfareporting_user_roles_patch` - Updates an existing user role. This method supports patch semantics.
* `dfareporting_user_roles_update` - Updates an existing user role.

### videoFormats

* `dfareporting_video_formats_get` - Gets one video format by ID.
* `dfareporting_video_formats_list` - Lists available video formats.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
