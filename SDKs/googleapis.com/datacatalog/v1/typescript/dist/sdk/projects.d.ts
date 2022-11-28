import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * datacatalogProjectsLocationsEntryGroupsCreate - Creates an entry group. An entry group contains logically related entries together with [Cloud Identity and Access Management](/data-catalog/docs/concepts/iam) policies. These policies specify users who can create, edit, and view entries within entry groups. Data Catalog automatically creates entry groups with names that start with the `@` symbol for the following resources: * BigQuery entries (`@bigquery`) * Pub/Sub topics (`@pubsub`) * Dataproc Metastore services (`@dataproc_metastore_{SERVICE_NAME_HASH}`) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies. User-created entry groups can't contain the `@` symbol, it is reserved for automatically created groups. Entry groups, like entries, can be searched. A maximum of 10,000 entry groups may be created per organization across all locations. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
    **/
    datacatalogProjectsLocationsEntryGroupsCreate(req: operations.DatacatalogProjectsLocationsEntryGroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsCreateResponse>;
    /**
     * datacatalogProjectsLocationsEntryGroupsEntriesCreate - Creates an entry. You can create entries only with 'FILESET', 'CLUSTER', 'DATA_STREAM', or custom types. Data Catalog automatically creates entries with other types during metadata ingestion from integrated systems. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project). An entry group can have a maximum of 100,000 entries.
    **/
    datacatalogProjectsLocationsEntryGroupsEntriesCreate(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse>;
    /**
     * datacatalogProjectsLocationsEntryGroupsEntriesList - Lists entries. Note: Currently, this method can list only custom entries. To get a list of both custom and automatically created entries, use SearchCatalog.
    **/
    datacatalogProjectsLocationsEntryGroupsEntriesList(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesListRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesListResponse>;
    /**
     * datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContacts - Modifies contacts, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateContacts` IAM permission on the corresponding project.
    **/
    datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContacts(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsResponse>;
    /**
     * datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverview - Modifies entry overview, part of the business context of an Entry. To call this method, you must have the `datacatalog.entries.updateOverview` IAM permission on the corresponding project.
    **/
    datacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverview(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewResponse>;
    /**
     * datacatalogProjectsLocationsEntryGroupsEntriesStar - Marks an Entry as starred by the current user. Starring information is private to each user.
    **/
    datacatalogProjectsLocationsEntryGroupsEntriesStar(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesStarResponse>;
    /**
     * datacatalogProjectsLocationsEntryGroupsEntriesUnstar - Marks an Entry as NOT starred by the current user. Starring information is private to each user.
    **/
    datacatalogProjectsLocationsEntryGroupsEntriesUnstar(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesUnstarRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesUnstarResponse>;
    /**
     * datacatalogProjectsLocationsEntryGroupsList - Lists entry groups.
    **/
    datacatalogProjectsLocationsEntryGroupsList(req: operations.DatacatalogProjectsLocationsEntryGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsListResponse>;
    /**
     * datacatalogProjectsLocationsEntryGroupsTagsCreate - Creates a tag and assigns it to: * An Entry if the method name is `projects.locations.entryGroups.entries.tags.create`. * Or EntryGroupif the method name is `projects.locations.entryGroups.tags.create`. Note: The project identified by the `parent` parameter for the [tag] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template] (https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be in the same organization.
    **/
    datacatalogProjectsLocationsEntryGroupsTagsCreate(req: operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse>;
    /**
     * datacatalogProjectsLocationsEntryGroupsTagsList - Lists tags assigned to an Entry. The columns in the response are lowercased.
    **/
    datacatalogProjectsLocationsEntryGroupsTagsList(req: operations.DatacatalogProjectsLocationsEntryGroupsTagsListRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsTagsListResponse>;
    /**
     * datacatalogProjectsLocationsTagTemplatesCreate - Creates a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project).
    **/
    datacatalogProjectsLocationsTagTemplatesCreate(req: operations.DatacatalogProjectsLocationsTagTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTagTemplatesCreateResponse>;
    /**
     * datacatalogProjectsLocationsTagTemplatesFieldsCreate - Creates a field in a tag template. You must enable the Data Catalog API in the project identified by the `parent` parameter. For more information, see [Data Catalog resource project](https://cloud.google.com/data-catalog/docs/concepts/resource-project).
    **/
    datacatalogProjectsLocationsTagTemplatesFieldsCreate(req: operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse>;
    /**
     * datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename - Renames an enum value in a tag template. Within a single enum field, enum values must be unique.
    **/
    datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename(req: operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesCreate - Creates a taxonomy in a specified project. The taxonomy is initially empty, that is, it doesn't contain policy tags.
    **/
    datacatalogProjectsLocationsTaxonomiesCreate(req: operations.DatacatalogProjectsLocationsTaxonomiesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesCreateResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesExport - Exports taxonomies in the requested type and returns them, including their policy tags. The requested taxonomies must belong to the same project. This method generates `SerializedTaxonomy` protocol buffers with nested policy tags that can be used as input for `ImportTaxonomies` calls.
    **/
    datacatalogProjectsLocationsTaxonomiesExport(req: operations.DatacatalogProjectsLocationsTaxonomiesExportRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesExportResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesImport - Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources. For a cross-regional source, new taxonomies are created by copying from a source in another region. For an inlined source, taxonomies and policy tags are created in bulk using nested protocol buffer structures.
    **/
    datacatalogProjectsLocationsTaxonomiesImport(req: operations.DatacatalogProjectsLocationsTaxonomiesImportRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesImportResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesList - Lists all taxonomies in a project in a particular location that you have a permission to view.
    **/
    datacatalogProjectsLocationsTaxonomiesList(req: operations.DatacatalogProjectsLocationsTaxonomiesListRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesListResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate - Creates a policy tag in a taxonomy.
    **/
    datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete - Deletes a policy tag together with the following: * All of its descendant policy tags, if any * Policies associated with the policy tag and its descendants * References from BigQuery table schema of the policy tag and its descendants
    **/
    datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesPolicyTagsGet - Gets a policy tag.
    **/
    datacatalogProjectsLocationsTaxonomiesPolicyTagsGet(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy - Gets the IAM policy for a policy tag or a taxonomy.
    **/
    datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesPolicyTagsList - Lists all policy tags in a taxonomy.
    **/
    datacatalogProjectsLocationsTaxonomiesPolicyTagsList(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch - Updates a policy tag, including its display name, description, and parent policy tag.
    **/
    datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy - Sets the IAM policy for a policy tag or a taxonomy.
    **/
    datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions - Returns your permissions on a specified policy tag or taxonomy.
    **/
    datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesReplace - Replaces (updates) a taxonomy and all its policy tags. The taxonomy and its entire hierarchy of policy tags must be represented literally by `SerializedTaxonomy` and the nested `SerializedPolicyTag` messages. This operation automatically does the following: - Deletes the existing policy tags that are missing from the `SerializedPolicyTag`. - Creates policy tags that don't have resource names. They are considered new. - Updates policy tags with valid resources names accordingly.
    **/
    datacatalogProjectsLocationsTaxonomiesReplace(req: operations.DatacatalogProjectsLocationsTaxonomiesReplaceRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesReplaceResponse>;
}
