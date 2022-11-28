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
     * containeranalysisProjectsNotesBatchCreate - Creates new notes in batch.
    **/
    containeranalysisProjectsNotesBatchCreate(req: operations.ContaineranalysisProjectsNotesBatchCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsNotesBatchCreateResponse>;
    /**
     * containeranalysisProjectsNotesCreate - Creates a new note.
    **/
    containeranalysisProjectsNotesCreate(req: operations.ContaineranalysisProjectsNotesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsNotesCreateResponse>;
    /**
     * containeranalysisProjectsNotesList - Lists notes for the specified project.
    **/
    containeranalysisProjectsNotesList(req: operations.ContaineranalysisProjectsNotesListRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsNotesListResponse>;
    /**
     * containeranalysisProjectsNotesOccurrencesList - Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.
    **/
    containeranalysisProjectsNotesOccurrencesList(req: operations.ContaineranalysisProjectsNotesOccurrencesListRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsNotesOccurrencesListResponse>;
    /**
     * containeranalysisProjectsOccurrencesBatchCreate - Creates new occurrences in batch.
    **/
    containeranalysisProjectsOccurrencesBatchCreate(req: operations.ContaineranalysisProjectsOccurrencesBatchCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsOccurrencesBatchCreateResponse>;
    /**
     * containeranalysisProjectsOccurrencesCreate - Creates a new occurrence.
    **/
    containeranalysisProjectsOccurrencesCreate(req: operations.ContaineranalysisProjectsOccurrencesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsOccurrencesCreateResponse>;
    /**
     * containeranalysisProjectsOccurrencesDelete - Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.
    **/
    containeranalysisProjectsOccurrencesDelete(req: operations.ContaineranalysisProjectsOccurrencesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsOccurrencesDeleteResponse>;
    /**
     * containeranalysisProjectsOccurrencesGet - Gets the specified occurrence.
    **/
    containeranalysisProjectsOccurrencesGet(req: operations.ContaineranalysisProjectsOccurrencesGetRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsOccurrencesGetResponse>;
    /**
     * containeranalysisProjectsOccurrencesGetIamPolicy - Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
    **/
    containeranalysisProjectsOccurrencesGetIamPolicy(req: operations.ContaineranalysisProjectsOccurrencesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsOccurrencesGetIamPolicyResponse>;
    /**
     * containeranalysisProjectsOccurrencesGetNotes - Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.
    **/
    containeranalysisProjectsOccurrencesGetNotes(req: operations.ContaineranalysisProjectsOccurrencesGetNotesRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsOccurrencesGetNotesResponse>;
    /**
     * containeranalysisProjectsOccurrencesGetVulnerabilitySummary - Gets a summary of the number and severity of occurrences.
    **/
    containeranalysisProjectsOccurrencesGetVulnerabilitySummary(req: operations.ContaineranalysisProjectsOccurrencesGetVulnerabilitySummaryRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsOccurrencesGetVulnerabilitySummaryResponse>;
    /**
     * containeranalysisProjectsOccurrencesList - Lists occurrences for the specified project.
    **/
    containeranalysisProjectsOccurrencesList(req: operations.ContaineranalysisProjectsOccurrencesListRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsOccurrencesListResponse>;
    /**
     * containeranalysisProjectsOccurrencesPatch - Updates the specified occurrence.
    **/
    containeranalysisProjectsOccurrencesPatch(req: operations.ContaineranalysisProjectsOccurrencesPatchRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsOccurrencesPatchResponse>;
    /**
     * containeranalysisProjectsOccurrencesSetIamPolicy - Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
    **/
    containeranalysisProjectsOccurrencesSetIamPolicy(req: operations.ContaineranalysisProjectsOccurrencesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsOccurrencesSetIamPolicyResponse>;
    /**
     * containeranalysisProjectsOccurrencesTestIamPermissions - Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.
    **/
    containeranalysisProjectsOccurrencesTestIamPermissions(req: operations.ContaineranalysisProjectsOccurrencesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ContaineranalysisProjectsOccurrencesTestIamPermissionsResponse>;
}
