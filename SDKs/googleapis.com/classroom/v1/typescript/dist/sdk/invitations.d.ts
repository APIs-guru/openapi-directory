import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Invitations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * classroomInvitationsAccept - Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for access errors. * `FAILED_PRECONDITION` for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `NOT_FOUND` if no invitation exists with the requested ID.
    **/
    classroomInvitationsAccept(req: operations.ClassroomInvitationsAcceptRequest, config?: AxiosRequestConfig): Promise<operations.ClassroomInvitationsAcceptResponse>;
    /**
     * classroomInvitationsCreate - Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create invitations for this course or for access errors. * `NOT_FOUND` if the course or the user does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled or if the user already has this role or a role with greater permissions. * `ALREADY_EXISTS` if an invitation for the specified user and course already exists.
    **/
    classroomInvitationsCreate(req: operations.ClassroomInvitationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ClassroomInvitationsCreateResponse>;
    /**
     * classroomInvitationsDelete - Deletes an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
    **/
    classroomInvitationsDelete(req: operations.ClassroomInvitationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ClassroomInvitationsDeleteResponse>;
    /**
     * classroomInvitationsGet - Returns an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
    **/
    classroomInvitationsGet(req: operations.ClassroomInvitationsGetRequest, config?: AxiosRequestConfig): Promise<operations.ClassroomInvitationsGetResponse>;
    /**
     * classroomInvitationsList - Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method returns the following error codes: * `PERMISSION_DENIED` for access errors.
    **/
    classroomInvitationsList(req: operations.ClassroomInvitationsListRequest, config?: AxiosRequestConfig): Promise<operations.ClassroomInvitationsListResponse>;
}
