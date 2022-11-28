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
s.config_security(
    security=shared.Security(
        authorization=shared.SchemeAuthorization(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.DeleteCourseMappingsOfferingIDExternalCourseIDRequest(
    path_params=operations.DeleteCourseMappingsOfferingIDExternalCourseIDPathParams(
        external_course_id="et",
        offering_id="quo",
    ),
)
    
res = s.sdk.delete_course_mappings_offering_id_external_course_id_(req)

if res.delete_course_mappings_offering_id_external_course_id_200_application_json_strings is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `delete_course_mappings_offering_id_external_course_id_` - Remove course mapping
* `delete_offerings_offering_id_assessments_assessment_id_documents_document_id_` - Remove assessment document
* `delete_offerings_offering_id_channels_channel_id_learners` - Remove learners from a group channel
* `delete_offerings_offering_id_groups_group_id_learners_user_email_` - Remove a learner from an assessment group
* `delete_offerings_offering_id_users_marker_email_marks` - Remove learners from coach's marking list
* `delete_offerings_offering_id_users_user_email_` - Removes user from the offering
* `delete_offerings_offering_id_users_user_email_assessments_assessment_id_` - Reset user's assessment to draft state
* `get_` - List supported endpoints URLs
* `get_course_mappings` - Find course mappings
* `get_course_mappings_externalcourse_external_course_id_` - Find course mappings by externalCourseId
* `get_course_mappings_offering_id_` - Find course mappings by offeringId
* `get_courses` - Find courses
* `get_courses_content_id_` - Find course by contentId
* `get_courses_content_id_activations` - Find activations for a contentId
* `get_courses_content_id_permissions` - Find users who have access to the contentId provided
* `get_offerings` - Find current, past and future offerings
* `get_offerings_current` - Find active offerings
* `get_offerings_future` - Find scheduled offerings
* `get_offerings_info_text_pattern_` - Find offerings where info field matches the specified textPattern
* `get_offerings_offering_id_` - Find offering by ID
* `get_offerings_offering_id_activities_openresponse` - Find offering's activities
* `get_offerings_offering_id_analytics_activities_responses` - Find open response activity attempts
* `get_offerings_offering_id_analytics_channels_channel_id_comments` - Find comments
* `get_offerings_offering_id_analytics_channels_channel_id_posts` - Find posts
* `get_offerings_offering_id_analytics_channels_channel_id_replies` - Find replies
* `get_offerings_offering_id_analytics_learners_progress` - Find learner progress in a specified offering
* `get_offerings_offering_id_analytics_marks_assignments` - Find assessment marks
* `get_offerings_offering_id_analytics_marks_quizzes` - Find quiz marks
* `get_offerings_offering_id_analytics_pulses` - Find all pulse IDs in the specified offering
* `get_offerings_offering_id_analytics_pulses_pulse_id_responses` - Find pulses by offeringId and pulseId
* `get_offerings_offering_id_analytics_social_notes` - Find shared social notes in an offering
* `get_offerings_offering_id_analytics_submissions_assignments` - Find submissions to assessments, including marks if any
* `get_offerings_offering_id_analytics_submissions_open_response_assessment_id_` - Find submissions to a specified open response assessment, including marks if any
* `get_offerings_offering_id_analytics_submissions_user_email_assignments_assessment_id_` - Find a learner's submission to a specified assessment, including marks if any
* `get_offerings_offering_id_analytics_unit_reactions` - Find unit reactions
* `get_offerings_offering_id_assessments` - Find offering's assessments
* `get_offerings_offering_id_badges` - Find offering badges
* `get_offerings_offering_id_channels` - Find channels
* `get_offerings_offering_id_channels_channel_id_learners` - Find learners in a group channel
* `get_offerings_offering_id_groups` - Find assessment groups
* `get_offerings_offering_id_groups_group_id_learners` - Find learners in an assessment group
* `get_offerings_offering_id_learners_pending_submission` - Find learners with assessments pending x days before due date within the specified offeringId
* `get_offerings_offering_id_users` - Find offering's users
* `get_offerings_offering_id_users_marker_email_marks` - Find Learners marked by a coach
* `get_offerings_offering_id_users_user_email_submissions_open_response` - Find learner's open response assessment submissions
* `get_offerings_past` - Find past offerings
* `get_org` - Gets the current organisation
* `get_users_user_email_` - Find user by email
* `get_users_user_email_badges` - Find user's badges
* `get_users_user_email_offerings` - Find user's offerings
* `get_users_user_email_offerings_offering_id_progress` - Find learner's progress in a specified offering
* `get_users_user_email_progress` - Find learner's progress in offerings
* `patch_offerings_offering_id_` - Update offering
* `patch_offerings_offering_id_assessments_assessment_id_` - Update assessment details
* `patch_offerings_offering_id_assessments_assessment_id_user_email_` - Update the due dates for a learner's quiz attempt
* `patch_offerings_offering_id_channels_channel_id_` - Update channel
* `patch_users_user_email_` - Update user
* `patch_users_user_email_transfer` - Transfer a user between offerings
* `post_courses_root_content_id_permissions_user_email_` - Update course access
* `post_offerings` - Create offering
* `post_offerings_offering_id_channels` - Add channel
* `post_offerings_offering_id_channels_channel_id_learners` - Add learners to a group channel
* `post_offerings_offering_id_groups` - Add an assessment group
* `post_offerings_offering_id_groups_group_id_learners` - Add a learner to an assessment group
* `post_offerings_offering_id_users` - Adds user to the offering
* `post_offerings_offering_id_users_marker_email_marks` - Add learners to be marked by a coach
* `post_offerings_offering_id_users_user_email_badges_award` - Award badge
* `post_users` - Add new user
* `post_users_user_email_invite_email` - Resend invitation email
* `post_users_user_email_offerings` - Adds the user to the specified offerings as a learner
* `post_users_user_email_permissions_permission_name_` - Add permission to user
* `put_course_mappings_offering_id_external_course_id_` - Add course mapping
* `put_courses_content_id_metadata_category` - Update course category
* `put_courses_content_id_metadata_level` - Update course level
* `put_courses_content_id_metadata_tags` - Update course tags
* `put_courses_content_id_metadata_topic` - Update course topic
* `put_offerings_offering_id_metadata_category` - Update offering category metadata
* `put_offerings_offering_id_metadata_level` - Update offering level metadata
* `put_offerings_offering_id_metadata_tags` - Update offering tags metadata
* `put_offerings_offering_id_metadata_topic` - Update offering topic metadata
* `put_users_user_email_suspend` - Suspend user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
