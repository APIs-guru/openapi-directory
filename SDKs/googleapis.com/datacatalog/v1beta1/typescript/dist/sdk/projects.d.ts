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
     * datacatalogProjectsLocationsEntryGroupsCreate - A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
    **/
    datacatalogProjectsLocationsEntryGroupsCreate(req: operations.DatacatalogProjectsLocationsEntryGroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsCreateResponse>;
    /**
     * datacatalogProjectsLocationsEntryGroupsEntriesCreate - Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.
    **/
    datacatalogProjectsLocationsEntryGroupsEntriesCreate(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse>;
    /**
     * datacatalogProjectsLocationsEntryGroupsEntriesList - Lists entries.
    **/
    datacatalogProjectsLocationsEntryGroupsEntriesList(req: operations.DatacatalogProjectsLocationsEntryGroupsEntriesListRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsEntriesListResponse>;
    /**
     * datacatalogProjectsLocationsEntryGroupsList - Lists entry groups.
    **/
    datacatalogProjectsLocationsEntryGroupsList(req: operations.DatacatalogProjectsLocationsEntryGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsListResponse>;
    /**
     * datacatalogProjectsLocationsEntryGroupsTagsCreate - Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
    **/
    datacatalogProjectsLocationsEntryGroupsTagsCreate(req: operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse>;
    /**
     * datacatalogProjectsLocationsEntryGroupsTagsList - Lists tags assigned to an Entry. The columns in the response are lowercased.
    **/
    datacatalogProjectsLocationsEntryGroupsTagsList(req: operations.DatacatalogProjectsLocationsEntryGroupsTagsListRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsEntryGroupsTagsListResponse>;
    /**
     * datacatalogProjectsLocationsTagTemplatesCreate - Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
    **/
    datacatalogProjectsLocationsTagTemplatesCreate(req: operations.DatacatalogProjectsLocationsTagTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTagTemplatesCreateResponse>;
    /**
     * datacatalogProjectsLocationsTagTemplatesFieldsCreate - Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).
    **/
    datacatalogProjectsLocationsTagTemplatesFieldsCreate(req: operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse>;
    /**
     * datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename - Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.
    **/
    datacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRename(req: operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesCreate - Creates a taxonomy in the specified project.
    **/
    datacatalogProjectsLocationsTaxonomiesCreate(req: operations.DatacatalogProjectsLocationsTaxonomiesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesCreateResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesExport - Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.
    **/
    datacatalogProjectsLocationsTaxonomiesExport(req: operations.DatacatalogProjectsLocationsTaxonomiesExportRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesExportResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesImport - Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.
    **/
    datacatalogProjectsLocationsTaxonomiesImport(req: operations.DatacatalogProjectsLocationsTaxonomiesImportRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesImportResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesList - Lists all taxonomies in a project in a particular location that the caller has permission to view.
    **/
    datacatalogProjectsLocationsTaxonomiesList(req: operations.DatacatalogProjectsLocationsTaxonomiesListRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesListResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate - Creates a policy tag in the specified taxonomy.
    **/
    datacatalogProjectsLocationsTaxonomiesPolicyTagsCreate(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsCreateResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete - Deletes a policy tag. Also deletes all of its descendant policy tags.
    **/
    datacatalogProjectsLocationsTaxonomiesPolicyTagsDelete(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesPolicyTagsGet - Gets a policy tag.
    **/
    datacatalogProjectsLocationsTaxonomiesPolicyTagsGet(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy - Gets the IAM policy for a taxonomy or a policy tag.
    **/
    datacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicy(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetIamPolicyResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesPolicyTagsList - Lists all policy tags in a taxonomy.
    **/
    datacatalogProjectsLocationsTaxonomiesPolicyTagsList(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsListResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch - Updates a policy tag.
    **/
    datacatalogProjectsLocationsTaxonomiesPolicyTagsPatch(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy - Sets the IAM policy for a taxonomy or a policy tag.
    **/
    datacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicy(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsSetIamPolicyResponse>;
    /**
     * datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions - Returns the permissions that a caller has on the specified taxonomy or policy tag.
    **/
    datacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissions(req: operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse>;
}
