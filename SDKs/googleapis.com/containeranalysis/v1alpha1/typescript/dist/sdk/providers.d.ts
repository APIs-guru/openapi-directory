import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Providers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * containeranalysisProvidersNotesCreate - Creates a new `Note`.
    **/
    containeranalysisProvidersNotesCreate(req: operations.ContaineranalysisProvidersNotesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProvidersNotesCreateResponse>;
    /**
     * containeranalysisProvidersNotesDelete - Deletes the given `Note` from the system.
    **/
    containeranalysisProvidersNotesDelete(req: operations.ContaineranalysisProvidersNotesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProvidersNotesDeleteResponse>;
    /**
     * containeranalysisProvidersNotesGet - Returns the requested `Note`.
    **/
    containeranalysisProvidersNotesGet(req: operations.ContaineranalysisProvidersNotesGetRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProvidersNotesGetResponse>;
    /**
     * containeranalysisProvidersNotesGetIamPolicy - Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes
    **/
    containeranalysisProvidersNotesGetIamPolicy(req: operations.ContaineranalysisProvidersNotesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProvidersNotesGetIamPolicyResponse>;
    /**
     * containeranalysisProvidersNotesList - Lists all `Notes` for a given project.
    **/
    containeranalysisProvidersNotesList(req: operations.ContaineranalysisProvidersNotesListRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProvidersNotesListResponse>;
    /**
     * containeranalysisProvidersNotesOccurrencesList - Lists `Occurrences` referencing the specified `Note`. Use this method to get all occurrences referencing your `Note` across all your customer projects.
    **/
    containeranalysisProvidersNotesOccurrencesList(req: operations.ContaineranalysisProvidersNotesOccurrencesListRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProvidersNotesOccurrencesListResponse>;
    /**
     * containeranalysisProvidersNotesPatch - Updates an existing `Note`.
    **/
    containeranalysisProvidersNotesPatch(req: operations.ContaineranalysisProvidersNotesPatchRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProvidersNotesPatchResponse>;
    /**
     * containeranalysisProvidersNotesSetIamPolicy - Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes
    **/
    containeranalysisProvidersNotesSetIamPolicy(req: operations.ContaineranalysisProvidersNotesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProvidersNotesSetIamPolicyResponse>;
    /**
     * containeranalysisProvidersNotesTestIamPermissions - Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes`
    **/
    containeranalysisProvidersNotesTestIamPermissions(req: operations.ContaineranalysisProvidersNotesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProvidersNotesTestIamPermissionsResponse>;
}
