import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.iqualify.com/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteCourseMappingsOfferingIdExternalCourseId - Remove course mapping
     *
     * Removes the course mapping between the offering and the externalCourseId.
    **/
    deleteCourseMappingsOfferingIdExternalCourseId(req: operations.DeleteCourseMappingsOfferingIdExternalCourseIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCourseMappingsOfferingIdExternalCourseIdResponse>;
    /**
     * deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId - Remove assessment document
     *
     * Removes the assessment document file for a specified assessment in an offering.
    **/
    deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId(req: operations.DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdResponse>;
    /**
     * deleteOfferingsOfferingIdChannelsChannelIdLearners - Remove learners from a group channel
     *
     * Removes a learner from the specified group channel.
    **/
    deleteOfferingsOfferingIdChannelsChannelIdLearners(req: operations.DeleteOfferingsOfferingIdChannelsChannelIdLearnersRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdChannelsChannelIdLearnersResponse>;
    /**
     * deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail - Remove a learner from an assessment group
     *
     * Removes a learner from the specified assessment group.
    **/
    deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail(req: operations.DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailResponse>;
    /**
     * deleteOfferingsOfferingIdUsersMarkerEmailMarks - Remove learners from coach's marking list
     *
     * Removes an array of learners from coach's marking list.
    **/
    deleteOfferingsOfferingIdUsersMarkerEmailMarks(req: operations.DeleteOfferingsOfferingIdUsersMarkerEmailMarksRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdUsersMarkerEmailMarksResponse>;
    /**
     * deleteOfferingsOfferingIdUsersUserEmail - Removes user from the offering
     *
     * Removes a user from the offering.
    **/
    deleteOfferingsOfferingIdUsersUserEmail(req: operations.DeleteOfferingsOfferingIdUsersUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdUsersUserEmailResponse>;
    /**
     * deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId - Reset user's assessment to draft state
     *
     * Resets the user's submitted assessment to a draft state.
    **/
    deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId(req: operations.DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse>;
    /**
     * get - List supported endpoints URLs
     *
     * Responds with all supported endpoints URLs for v2 version.
    **/
    get(config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * getCourseMappings - Find course mappings
     *
     * Returns all course mappings for course offerings.
    **/
    getCourseMappings(config?: AxiosRequestConfig): Promise<operations.GetCourseMappingsResponse>;
    /**
     * getCourseMappingsExternalcourseExternalCourseId - Find course mappings by externalCourseId
     *
     * Responds with course mapping details by externalCourseId.
    **/
    getCourseMappingsExternalcourseExternalCourseId(req: operations.GetCourseMappingsExternalcourseExternalCourseIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCourseMappingsExternalcourseExternalCourseIdResponse>;
    /**
     * getCourseMappingsOfferingId - Find course mappings by offeringId
     *
     * Responds with course mapping details by offeringId.
    **/
    getCourseMappingsOfferingId(req: operations.GetCourseMappingsOfferingIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCourseMappingsOfferingIdResponse>;
    /**
     * getCourses - Find courses
     *
     * Responds with all courses (draft and published.)
    **/
    getCourses(config?: AxiosRequestConfig): Promise<operations.GetCoursesResponse>;
    /**
     * getCoursesContentId - Find course by contentId
     *
     * Responds with a course matching the contentId.
    **/
    getCoursesContentId(req: operations.GetCoursesContentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCoursesContentIdResponse>;
    /**
     * getCoursesContentIdActivations - Find activations for a contentId
     *
     * Responds with all activations for the contentId provided.
    **/
    getCoursesContentIdActivations(req: operations.GetCoursesContentIdActivationsRequest, config?: AxiosRequestConfig): Promise<operations.GetCoursesContentIdActivationsResponse>;
    /**
     * getCoursesContentIdPermissions - Find users who have access to the contentId provided
     *
     * Responds with users who have access to a specific course by contentId.
    **/
    getCoursesContentIdPermissions(req: operations.GetCoursesContentIdPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetCoursesContentIdPermissionsResponse>;
    /**
     * getOfferings - Find current, past and future offerings
     *
     * Responds with all offerings for your organisation.
    **/
    getOfferings(config?: AxiosRequestConfig): Promise<operations.GetOfferingsResponse>;
    /**
     * getOfferingsCurrent - Find active offerings
     *
     * Responds with active offerings for your organisation.
    **/
    getOfferingsCurrent(config?: AxiosRequestConfig): Promise<operations.GetOfferingsCurrentResponse>;
    /**
     * getOfferingsFuture - Find scheduled offerings
     *
     * Responds with scheduled offerings for your organisation. Scheduled offerings have a start date after today's date (inclusive).
    **/
    getOfferingsFuture(config?: AxiosRequestConfig): Promise<operations.GetOfferingsFutureResponse>;
    /**
     * getOfferingsInfoTextPattern - Find offerings where info field matches the specified textPattern
     *
     * Find offerings where info field matches the specified text pattern.
    **/
    getOfferingsInfoTextPattern(req: operations.GetOfferingsInfoTextPatternRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsInfoTextPatternResponse>;
    /**
     * getOfferingsOfferingId - Find offering by ID
     *
     * Responds with an offering matching the offeringId.
    **/
    getOfferingsOfferingId(req: operations.GetOfferingsOfferingIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdResponse>;
    /**
     * getOfferingsOfferingIdActivitiesOpenresponse - Find offering's activities
     *
     * Responds with the activities in a specific offering.
    **/
    getOfferingsOfferingIdActivitiesOpenresponse(req: operations.GetOfferingsOfferingIdActivitiesOpenresponseRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdActivitiesOpenresponseResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsActivitiesResponses - Find open response activity attempts
     *
     * Responds with all learner activity attempts for open response activities in an offering matching the offeringId.
    **/
    getOfferingsOfferingIdAnalyticsActivitiesResponses(req: operations.GetOfferingsOfferingIdAnalyticsActivitiesResponsesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsActivitiesResponsesResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsChannelsChannelIdComments - Find comments
     *
     * Responds with a list of comments made in any posts in a specified channel, within an offering.
    **/
    getOfferingsOfferingIdAnalyticsChannelsChannelIdComments(req: operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsChannelsChannelIdPosts - Find posts
     *
     * Responds with a list of posts made in a specified channel, within an offering.
    **/
    getOfferingsOfferingIdAnalyticsChannelsChannelIdPosts(req: operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdPostsResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsChannelsChannelIdReplies - Find replies
     *
     * Responds with a list of replies to comments in any posts in a specified channel, within an offering.
    **/
    getOfferingsOfferingIdAnalyticsChannelsChannelIdReplies(req: operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsLearnersProgress - Find learner progress in a specified offering
     *
     * Responds with all learner progress in the offering.
    **/
    getOfferingsOfferingIdAnalyticsLearnersProgress(req: operations.GetOfferingsOfferingIdAnalyticsLearnersProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsLearnersProgressResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsMarksAssignments - Find assessment marks
     *
     * Responds with all learner assessment marks in an offering matching the offeringId.
    **/
    getOfferingsOfferingIdAnalyticsMarksAssignments(req: operations.GetOfferingsOfferingIdAnalyticsMarksAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsMarksAssignmentsResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsMarksQuizzes - Find quiz marks
     *
     * Responds with all learner quiz marks in an offering matching the offeringId.
    **/
    getOfferingsOfferingIdAnalyticsMarksQuizzes(req: operations.GetOfferingsOfferingIdAnalyticsMarksQuizzesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsMarksQuizzesResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsPulses - Find all pulse IDs in the specified offering
     *
     * Responds with the IDs of all pulses that learners have responded to in a specified offering.
    **/
    getOfferingsOfferingIdAnalyticsPulses(req: operations.GetOfferingsOfferingIdAnalyticsPulsesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsPulsesResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses - Find pulses by offeringId and pulseId
     *
     * Responds with pulse's responses, matching the pulseId, in an offering matching the offeringId.
    **/
    getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses(req: operations.GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsSocialNotes - Find shared social notes in an offering
     *
     * Responds with all shared social notes in a specified offering.
    **/
    getOfferingsOfferingIdAnalyticsSocialNotes(req: operations.GetOfferingsOfferingIdAnalyticsSocialNotesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsSocialNotesResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsSubmissionsAssignments - Find submissions to assessments, including marks if any
     *
     * Responds with all learner assessment submissions and marks, if any, in an offering matching the offeringId.
    **/
    getOfferingsOfferingIdAnalyticsSubmissionsAssignments(req: operations.GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId - Find submissions to a specified open response assessment, including marks if any
     *
     * Responds with all learner assessment submissions and marks, if any, in a specified open response assessment.
    **/
    getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId(req: operations.GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId - Find a learner's submission to a specified assessment, including marks if any
     *
     * Responds with the learner's assessment submission and any marks for the submission.
    **/
    getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId(req: operations.GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdResponse>;
    /**
     * getOfferingsOfferingIdAnalyticsUnitReactions - Find unit reactions
     *
     * Responds with user reactions to units in a specified offering.
    **/
    getOfferingsOfferingIdAnalyticsUnitReactions(req: operations.GetOfferingsOfferingIdAnalyticsUnitReactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAnalyticsUnitReactionsResponse>;
    /**
     * getOfferingsOfferingIdAssessments - Find offering's assessments
     *
     * Responds with all assessments in an offering matching the offeringId.
    **/
    getOfferingsOfferingIdAssessments(req: operations.GetOfferingsOfferingIdAssessmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdAssessmentsResponse>;
    /**
     * getOfferingsOfferingIdBadges - Find offering badges
     *
     * Responds with the badge for an offering matching the offeringId.
    **/
    getOfferingsOfferingIdBadges(req: operations.GetOfferingsOfferingIdBadgesRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdBadgesResponse>;
    /**
     * getOfferingsOfferingIdChannels - Find channels
     *
     * Responds with a list of channels in an offering.
    **/
    getOfferingsOfferingIdChannels(req: operations.GetOfferingsOfferingIdChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdChannelsResponse>;
    /**
     * getOfferingsOfferingIdChannelsChannelIdLearners - Find learners in a group channel
     *
     * Finds all learners in a specified group channel.
    **/
    getOfferingsOfferingIdChannelsChannelIdLearners(req: operations.GetOfferingsOfferingIdChannelsChannelIdLearnersRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdChannelsChannelIdLearnersResponse>;
    /**
     * getOfferingsOfferingIdGroups - Find assessment groups
     *
     * Responds with a list of assessment groups in an offering.
    **/
    getOfferingsOfferingIdGroups(req: operations.GetOfferingsOfferingIdGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdGroupsResponse>;
    /**
     * getOfferingsOfferingIdGroupsGroupIdLearners - Find learners in an assessment group
     *
     * Responds with a list of learners in a specified assessment group.
    **/
    getOfferingsOfferingIdGroupsGroupIdLearners(req: operations.GetOfferingsOfferingIdGroupsGroupIdLearnersRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdGroupsGroupIdLearnersResponse>;
    /**
     * getOfferingsOfferingIdLearnersPendingSubmission - Find learners with assessments pending x days before due date within the specified offeringId
     *
     * Responds with learners who have one or more assessments due x days before the due date, with each assessment that is due, where x = the number of days specified in the request. The default is 3 days.
    **/
    getOfferingsOfferingIdLearnersPendingSubmission(req: operations.GetOfferingsOfferingIdLearnersPendingSubmissionRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdLearnersPendingSubmissionResponse>;
    /**
     * getOfferingsOfferingIdUsers - Find offering's users
     *
     * Responds with a list of users in the offering (facilitators, learners and markers.).
    **/
    getOfferingsOfferingIdUsers(req: operations.GetOfferingsOfferingIdUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdUsersResponse>;
    /**
     * getOfferingsOfferingIdUsersMarkerEmailMarks - Find Learners marked by a coach
     *
     * Responds with all learners marked by the specified coach.
    **/
    getOfferingsOfferingIdUsersMarkerEmailMarks(req: operations.GetOfferingsOfferingIdUsersMarkerEmailMarksRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdUsersMarkerEmailMarksResponse>;
    /**
     * getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse - Find learner's open response assessment submissions
     *
     * Responds with open response assessment submissions by a learner in an offering.
    **/
    getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse(req: operations.GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRequest, config?: AxiosRequestConfig): Promise<operations.GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse>;
    /**
     * getOfferingsPast - Find past offerings
     *
     * Responds with past offerings for your organisation.
    **/
    getOfferingsPast(config?: AxiosRequestConfig): Promise<operations.GetOfferingsPastResponse>;
    /**
     * getOrg - Gets the current organisation
     *
     * Returns the current organisation info.
    **/
    getOrg(config?: AxiosRequestConfig): Promise<operations.GetOrgResponse>;
    /**
     * getUsersUserEmail - Find user by email
     *
     * Responds with a user matching the specified email.
    **/
    getUsersUserEmail(req: operations.GetUsersUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserEmailResponse>;
    /**
     * getUsersUserEmailBadges - Find user's badges
     *
     * Responds with all badges that the specified user has been awarded.
    **/
    getUsersUserEmailBadges(req: operations.GetUsersUserEmailBadgesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserEmailBadgesResponse>;
    /**
     * getUsersUserEmailOfferings - Find user's offerings
     *
     * Responds with all offerings that the user in.
    **/
    getUsersUserEmailOfferings(req: operations.GetUsersUserEmailOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserEmailOfferingsResponse>;
    /**
     * getUsersUserEmailOfferingsOfferingIdProgress - Find learner's progress in a specified offering
     *
     * Responds with the learner's progress in a specified offering.
    **/
    getUsersUserEmailOfferingsOfferingIdProgress(req: operations.GetUsersUserEmailOfferingsOfferingIdProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserEmailOfferingsOfferingIdProgressResponse>;
    /**
     * getUsersUserEmailProgress - Find learner's progress in offerings
     *
     * Responds with the specified learner's progress in all offerings.
    **/
    getUsersUserEmailProgress(req: operations.GetUsersUserEmailProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserEmailProgressResponse>;
    /**
     * patchOfferingsOfferingId - Update offering
     *
     * Updates the offering.
    **/
    patchOfferingsOfferingId(req: operations.PatchOfferingsOfferingIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchOfferingsOfferingIdResponse>;
    /**
     * patchOfferingsOfferingIdAssessmentsAssessmentId - Update assessment details
     *
     * Updates the assessment details for a specified assessment in an offering.
    **/
    patchOfferingsOfferingIdAssessmentsAssessmentId(req: operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdResponse>;
    /**
     * patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail - Update the due dates for a learner's quiz attempt
     *
     * Updates the due dates for a learner's quiz attempt specified by the assessmentId.
    **/
    patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail(req: operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse>;
    /**
     * patchOfferingsOfferingIdChannelsChannelId - Update channel
     *
     * Updates a channel in an offering.
    **/
    patchOfferingsOfferingIdChannelsChannelId(req: operations.PatchOfferingsOfferingIdChannelsChannelIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchOfferingsOfferingIdChannelsChannelIdResponse>;
    /**
     * patchUsersUserEmail - Update user
     *
     * Updates the specified user by email.
    **/
    patchUsersUserEmail(req: operations.PatchUsersUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.PatchUsersUserEmailResponse>;
    /**
     * patchUsersUserEmailTransfer - Transfer a user between offerings
     *
     * Moves the user's access and progress from one offering to another.
    **/
    patchUsersUserEmailTransfer(req: operations.PatchUsersUserEmailTransferRequest, config?: AxiosRequestConfig): Promise<operations.PatchUsersUserEmailTransferResponse>;
    /**
     * postCoursesRootContentIdPermissionsUserEmail - Update course access
     *
     * Provide a user with access to a specific course by rootContentId.
    **/
    postCoursesRootContentIdPermissionsUserEmail(req: operations.PostCoursesRootContentIdPermissionsUserEmailRequest, config?: AxiosRequestConfig): Promise<operations.PostCoursesRootContentIdPermissionsUserEmailResponse>;
    /**
     * postOfferings - Create offering
     *
     * Creates a new offering.
    **/
    postOfferings(req: operations.PostOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsResponse>;
    /**
     * postOfferingsOfferingIdChannels - Add channel
     *
     * Adds new channel to the specified offering.
    **/
    postOfferingsOfferingIdChannels(req: operations.PostOfferingsOfferingIdChannelsRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdChannelsResponse>;
    /**
     * postOfferingsOfferingIdChannelsChannelIdLearners - Add learners to a group channel
     *
     * Adds a learner to a specified group channel.
    **/
    postOfferingsOfferingIdChannelsChannelIdLearners(req: operations.PostOfferingsOfferingIdChannelsChannelIdLearnersRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdChannelsChannelIdLearnersResponse>;
    /**
     * postOfferingsOfferingIdGroups - Add an assessment group
     *
     * Creates a new assessment group in an offering.
    **/
    postOfferingsOfferingIdGroups(req: operations.PostOfferingsOfferingIdGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdGroupsResponse>;
    /**
     * postOfferingsOfferingIdGroupsGroupIdLearners - Add a learner to an assessment group
     *
     * Adds a learner into the specified assessment group.
    **/
    postOfferingsOfferingIdGroupsGroupIdLearners(req: operations.PostOfferingsOfferingIdGroupsGroupIdLearnersRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdGroupsGroupIdLearnersResponse>;
    /**
     * postOfferingsOfferingIdUsers - Adds user to the offering
     *
     * Adds one or more users to the offering.
    **/
    postOfferingsOfferingIdUsers(req: operations.PostOfferingsOfferingIdUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdUsersResponse>;
    /**
     * postOfferingsOfferingIdUsersMarkerEmailMarks - Add learners to be marked by a coach
     *
     * Adds an array of learners to be marked by the specified coach.
    **/
    postOfferingsOfferingIdUsersMarkerEmailMarks(req: operations.PostOfferingsOfferingIdUsersMarkerEmailMarksRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdUsersMarkerEmailMarksResponse>;
    /**
     * postOfferingsOfferingIdUsersUserEmailBadgesAward - Award badge
     *
     * Awards a badge to a user in the offering.
    **/
    postOfferingsOfferingIdUsersUserEmailBadgesAward(req: operations.PostOfferingsOfferingIdUsersUserEmailBadgesAwardRequest, config?: AxiosRequestConfig): Promise<operations.PostOfferingsOfferingIdUsersUserEmailBadgesAwardResponse>;
    /**
     * postUsers - Add new user
     *
     * Creates a new user.
    **/
    postUsers(req: operations.PostUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersResponse>;
    /**
     * postUsersUserEmailInviteEmail - Resend invitation email
     *
     * Re-sends an invitation e-mail to the specified user.
    **/
    postUsersUserEmailInviteEmail(req: operations.PostUsersUserEmailInviteEmailRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserEmailInviteEmailResponse>;
    /**
     * postUsersUserEmailOfferings - Adds the user to the specified offerings as a learner
     *
     * Adds a user to an array of offerings by offeringId.
    **/
    postUsersUserEmailOfferings(req: operations.PostUsersUserEmailOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserEmailOfferingsResponse>;
    /**
     * postUsersUserEmailPermissionsPermissionName - Add permission to user
     *
     * Adds additional permissions to the specified user.
    **/
    postUsersUserEmailPermissionsPermissionName(req: operations.PostUsersUserEmailPermissionsPermissionNameRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserEmailPermissionsPermissionNameResponse>;
    /**
     * putCourseMappingsOfferingIdExternalCourseId - Add course mapping
     *
     * Creates a mapping between the offering and the externalCourseId.
    **/
    putCourseMappingsOfferingIdExternalCourseId(req: operations.PutCourseMappingsOfferingIdExternalCourseIdRequest, config?: AxiosRequestConfig): Promise<operations.PutCourseMappingsOfferingIdExternalCourseIdResponse>;
    /**
     * putCoursesContentIdMetadataCategory - Update course category
     *
     * Add or update course category in the metadata of a course.
    **/
    putCoursesContentIdMetadataCategory(req: operations.PutCoursesContentIdMetadataCategoryRequest, config?: AxiosRequestConfig): Promise<operations.PutCoursesContentIdMetadataCategoryResponse>;
    /**
     * putCoursesContentIdMetadataLevel - Update course level
     *
     * Add or update the course level in the metadata of a course.
    **/
    putCoursesContentIdMetadataLevel(req: operations.PutCoursesContentIdMetadataLevelRequest, config?: AxiosRequestConfig): Promise<operations.PutCoursesContentIdMetadataLevelResponse>;
    /**
     * putCoursesContentIdMetadataTags - Update course tags
     *
     * Add or update course tags in the metadata of a course.
    **/
    putCoursesContentIdMetadataTags(req: operations.PutCoursesContentIdMetadataTagsRequest, config?: AxiosRequestConfig): Promise<operations.PutCoursesContentIdMetadataTagsResponse>;
    /**
     * putCoursesContentIdMetadataTopic - Update course topic
     *
     * Add or update the course topic in the metadata of a course.
    **/
    putCoursesContentIdMetadataTopic(req: operations.PutCoursesContentIdMetadataTopicRequest, config?: AxiosRequestConfig): Promise<operations.PutCoursesContentIdMetadataTopicResponse>;
    /**
     * putOfferingsOfferingIdMetadataCategory - Update offering category metadata
     *
     * Updates the offering category metadata.
    **/
    putOfferingsOfferingIdMetadataCategory(req: operations.PutOfferingsOfferingIdMetadataCategoryRequest, config?: AxiosRequestConfig): Promise<operations.PutOfferingsOfferingIdMetadataCategoryResponse>;
    /**
     * putOfferingsOfferingIdMetadataLevel - Update offering level metadata
     *
     * Updates the offering level metadata.
    **/
    putOfferingsOfferingIdMetadataLevel(req: operations.PutOfferingsOfferingIdMetadataLevelRequest, config?: AxiosRequestConfig): Promise<operations.PutOfferingsOfferingIdMetadataLevelResponse>;
    /**
     * putOfferingsOfferingIdMetadataTags - Update offering tags metadata
     *
     * Updates the offering tags metadata.
    **/
    putOfferingsOfferingIdMetadataTags(req: operations.PutOfferingsOfferingIdMetadataTagsRequest, config?: AxiosRequestConfig): Promise<operations.PutOfferingsOfferingIdMetadataTagsResponse>;
    /**
     * putOfferingsOfferingIdMetadataTopic - Update offering topic metadata
     *
     * Updates the offering topic metadata.
    **/
    putOfferingsOfferingIdMetadataTopic(req: operations.PutOfferingsOfferingIdMetadataTopicRequest, config?: AxiosRequestConfig): Promise<operations.PutOfferingsOfferingIdMetadataTopicResponse>;
    /**
     * putUsersUserEmailSuspend - Suspend user
     *
     * Suspends the specified user's account.
    **/
    putUsersUserEmailSuspend(req: operations.PutUsersUserEmailSuspendRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersUserEmailSuspendResponse>;
}
export {};
