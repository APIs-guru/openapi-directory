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
    
req = operations.DrivelabelsLabelsCreateRequest(
    query_params=operations.DrivelabelsLabelsCreateQueryParams(
        dollar_xgafv="1",
        access_token="quia",
        alt="json",
        callback="consectetur",
        fields="omnis",
        key="at",
        language_code="et",
        oauth_token="sed",
        pretty_print=True,
        quota_user="cum",
        upload_type="at",
        upload_protocol="fugit",
        use_admin_access=False,
    ),
    request=shared.GoogleAppsDriveLabelsV2betaLabelInput(
        applied_capabilities=shared.GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities(
            can_apply=True,
            can_read=True,
            can_remove=True,
        ),
        applied_label_policy=shared.GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy(
            copy_mode="COPY_APPLIABLE",
        ),
        creator=shared.GoogleAppsDriveLabelsV2betaUserInfo(
            person="ea",
        ),
        disabler=shared.GoogleAppsDriveLabelsV2betaUserInfo(
            person="totam",
        ),
        display_hints=shared.GoogleAppsDriveLabelsV2betaLabelDisplayHints(
            disabled=True,
            hidden_in_search=True,
            priority="enim",
            shown_in_apply=False,
        ),
        fields=[
            shared.GoogleAppsDriveLabelsV2betaFieldInput(
                applied_capabilities=shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities(
                    can_read=True,
                    can_search=True,
                    can_write=True,
                ),
                creator=shared.GoogleAppsDriveLabelsV2betaUserInfo(
                    person="quas",
                ),
                date_options=shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput(
                    date_format_type="DATE_FORMAT_UNSPECIFIED",
                    max_value=shared.GoogleTypeDate(
                        day=5616634297539951106,
                        month=1389370168788228999,
                        year=2467105181836640230,
                    ),
                    min_value=shared.GoogleTypeDate(
                        day=477525113881419882,
                        month=4908732067574768779,
                        year=6967081247951840472,
                    ),
                ),
                disabler=shared.GoogleAppsDriveLabelsV2betaUserInfo(
                    person="ipsa",
                ),
                display_hints=shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints(
                    disabled=False,
                    hidden_in_search=True,
                    required=True,
                    shown_in_apply=False,
                ),
                lifecycle=shared.GoogleAppsDriveLabelsV2betaLifecycleInput(
                    disabled_policy=shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy(
                        hide_in_search=False,
                        show_in_apply=True,
                    ),
                ),
                properties=shared.GoogleAppsDriveLabelsV2betaFieldProperties(
                    display_name="quis",
                    insert_before_field="assumenda",
                    required=False,
                ),
                publisher=shared.GoogleAppsDriveLabelsV2betaUserInfo(
                    person="consequatur",
                ),
                schema_capabilities=shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities(
                    can_delete=False,
                    can_disable=True,
                    can_enable=False,
                    can_update=True,
                ),
                selection_options=shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput(
                    choices=[
                        shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput(
                            applied_capabilities=shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities(
                                can_read=False,
                                can_search=True,
                                can_select=False,
                            ),
                            creator=shared.GoogleAppsDriveLabelsV2betaUserInfo(
                                person="adipisci",
                            ),
                            disabler=shared.GoogleAppsDriveLabelsV2betaUserInfo(
                                person="reprehenderit",
                            ),
                            display_hints=shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints(
                                badge_colors=shared.GoogleAppsDriveLabelsV2betaBadgeColors(
                                    background_color=shared.GoogleTypeColor(
                                        alpha=20.100000,
                                        blue=69.199997,
                                        green=81.099998,
                                        red=88.199997,
                                    ),
                                    foreground_color=shared.GoogleTypeColor(
                                        alpha=38.200001,
                                        blue=85.099998,
                                        green=67.099998,
                                        red=64.099998,
                                    ),
                                    solo_color=shared.GoogleTypeColor(
                                        alpha=85.199997,
                                        blue=9.200000,
                                        green=29.200001,
                                        red=51.099998,
                                    ),
                                ),
                                badge_priority="sunt",
                                dark_badge_colors=shared.GoogleAppsDriveLabelsV2betaBadgeColors(
                                    background_color=shared.GoogleTypeColor(
                                        alpha=85.199997,
                                        blue=48.099998,
                                        green=75.099998,
                                        red=71.099998,
                                    ),
                                    foreground_color=shared.GoogleTypeColor(
                                        alpha=79.099998,
                                        blue=15.200000,
                                        green=95.199997,
                                        red=87.199997,
                                    ),
                                    solo_color=shared.GoogleTypeColor(
                                        alpha=75.199997,
                                        blue=23.200001,
                                        green=50.099998,
                                        red=72.099998,
                                    ),
                                ),
                                disabled=False,
                                hidden_in_search=False,
                                shown_in_apply=False,
                            ),
                            id="non",
                            lifecycle=shared.GoogleAppsDriveLabelsV2betaLifecycleInput(
                                disabled_policy=shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy(
                                    hide_in_search=False,
                                    show_in_apply=False,
                                ),
                            ),
                            properties=shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties(
                                badge_config=shared.GoogleAppsDriveLabelsV2betaBadgeConfig(
                                    color=shared.GoogleTypeColor(
                                        alpha=21.200001,
                                        blue=96.099998,
                                        green=11.200000,
                                        red=1.200000,
                                    ),
                                    priority_override="a",
                                ),
                                description="quia",
                                display_name="aut",
                                insert_before_choice="soluta",
                            ),
                            publisher=shared.GoogleAppsDriveLabelsV2betaUserInfo(
                                person="aut",
                            ),
                            schema_capabilities=shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities(
                                can_delete=False,
                                can_disable=True,
                                can_enable=False,
                                can_update=False,
                            ),
                            updater=shared.GoogleAppsDriveLabelsV2betaUserInfo(
                                person="pariatur",
                            ),
                        ),
                    ],
                    list_options=shared.GoogleAppsDriveLabelsV2betaFieldListOptions(
                        max_entries=3791495815245397066,
                    ),
                ),
                updater=shared.GoogleAppsDriveLabelsV2betaUserInfo(
                    person="molestiae",
                ),
                user_options=shared.GoogleAppsDriveLabelsV2betaFieldUserOptions(
                    list_options=shared.GoogleAppsDriveLabelsV2betaFieldListOptions(
                        max_entries=2503627642135452943,
                    ),
                ),
            ),
            shared.GoogleAppsDriveLabelsV2betaFieldInput(
                applied_capabilities=shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities(
                    can_read=False,
                    can_search=True,
                    can_write=True,
                ),
                creator=shared.GoogleAppsDriveLabelsV2betaUserInfo(
                    person="rerum",
                ),
                date_options=shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput(
                    date_format_type="LONG_DATE",
                    max_value=shared.GoogleTypeDate(
                        day=1909886773700121370,
                        month=7494288104748988191,
                        year=153419209594285167,
                    ),
                    min_value=shared.GoogleTypeDate(
                        day=789858951537355929,
                        month=5875717815415457979,
                        year=1699122590662142008,
                    ),
                ),
                disabler=shared.GoogleAppsDriveLabelsV2betaUserInfo(
                    person="fugiat",
                ),
                display_hints=shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints(
                    disabled=True,
                    hidden_in_search=True,
                    required=True,
                    shown_in_apply=True,
                ),
                lifecycle=shared.GoogleAppsDriveLabelsV2betaLifecycleInput(
                    disabled_policy=shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy(
                        hide_in_search=True,
                        show_in_apply=True,
                    ),
                ),
                properties=shared.GoogleAppsDriveLabelsV2betaFieldProperties(
                    display_name="quo",
                    insert_before_field="vel",
                    required=True,
                ),
                publisher=shared.GoogleAppsDriveLabelsV2betaUserInfo(
                    person="sunt",
                ),
                schema_capabilities=shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities(
                    can_delete=True,
                    can_disable=True,
                    can_enable=False,
                    can_update=True,
                ),
                selection_options=shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput(
                    choices=[
                        shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput(
                            applied_capabilities=shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities(
                                can_read=False,
                                can_search=True,
                                can_select=False,
                            ),
                            creator=shared.GoogleAppsDriveLabelsV2betaUserInfo(
                                person="autem",
                            ),
                            disabler=shared.GoogleAppsDriveLabelsV2betaUserInfo(
                                person="porro",
                            ),
                            display_hints=shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints(
                                badge_colors=shared.GoogleAppsDriveLabelsV2betaBadgeColors(
                                    background_color=shared.GoogleTypeColor(
                                        alpha=61.200001,
                                        blue=17.200001,
                                        green=37.200001,
                                        red=17.200001,
                                    ),
                                    foreground_color=shared.GoogleTypeColor(
                                        alpha=25.100000,
                                        blue=56.200001,
                                        green=41.099998,
                                        red=43.099998,
                                    ),
                                    solo_color=shared.GoogleTypeColor(
                                        alpha=91.199997,
                                        blue=57.200001,
                                        green=50.200001,
                                        red=47.200001,
                                    ),
                                ),
                                badge_priority="nostrum",
                                dark_badge_colors=shared.GoogleAppsDriveLabelsV2betaBadgeColors(
                                    background_color=shared.GoogleTypeColor(
                                        alpha=95.199997,
                                        blue=81.099998,
                                        green=69.099998,
                                        red=77.099998,
                                    ),
                                    foreground_color=shared.GoogleTypeColor(
                                        alpha=99.199997,
                                        blue=67.099998,
                                        green=46.200001,
                                        red=7.100000,
                                    ),
                                    solo_color=shared.GoogleTypeColor(
                                        alpha=51.099998,
                                        blue=50.200001,
                                        green=71.099998,
                                        red=28.200001,
                                    ),
                                ),
                                disabled=False,
                                hidden_in_search=False,
                                shown_in_apply=True,
                            ),
                            id="repellat",
                            lifecycle=shared.GoogleAppsDriveLabelsV2betaLifecycleInput(
                                disabled_policy=shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy(
                                    hide_in_search=False,
                                    show_in_apply=False,
                                ),
                            ),
                            properties=shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties(
                                badge_config=shared.GoogleAppsDriveLabelsV2betaBadgeConfig(
                                    color=shared.GoogleTypeColor(
                                        alpha=47.200001,
                                        blue=41.099998,
                                        green=85.099998,
                                        red=0.200000,
                                    ),
                                    priority_override="veniam",
                                ),
                                description="eum",
                                display_name="dolorem",
                                insert_before_choice="ab",
                            ),
                            publisher=shared.GoogleAppsDriveLabelsV2betaUserInfo(
                                person="qui",
                            ),
                            schema_capabilities=shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities(
                                can_delete=True,
                                can_disable=True,
                                can_enable=True,
                                can_update=False,
                            ),
                            updater=shared.GoogleAppsDriveLabelsV2betaUserInfo(
                                person="ut",
                            ),
                        ),
                    ],
                    list_options=shared.GoogleAppsDriveLabelsV2betaFieldListOptions(
                        max_entries=6891606198488508276,
                    ),
                ),
                updater=shared.GoogleAppsDriveLabelsV2betaUserInfo(
                    person="odio",
                ),
                user_options=shared.GoogleAppsDriveLabelsV2betaFieldUserOptions(
                    list_options=shared.GoogleAppsDriveLabelsV2betaFieldListOptions(
                        max_entries=7642754204309316601,
                    ),
                ),
            ),
        ],
        label_type="LABEL_TYPE_UNSPECIFIED",
        learn_more_uri="corrupti",
        lifecycle=shared.GoogleAppsDriveLabelsV2betaLifecycleInput(
            disabled_policy=shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy(
                hide_in_search=False,
                show_in_apply=True,
            ),
        ),
        properties=shared.GoogleAppsDriveLabelsV2betaLabelProperties(
            description="et",
            title="velit",
        ),
        publisher=shared.GoogleAppsDriveLabelsV2betaUserInfo(
            person="dolorum",
        ),
        revision_creator=shared.GoogleAppsDriveLabelsV2betaUserInfo(
            person="maiores",
        ),
        schema_capabilities=shared.GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities(
            can_delete=True,
            can_disable=False,
            can_enable=False,
            can_update=True,
        ),
    ),
)
    
res = s.labels.drivelabels_labels_create(req)

if res.google_apps_drive_labels_v2beta_label is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### labels

* `drivelabels_labels_create` - Creates a new Label.
* `drivelabels_labels_delta` - Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
* `drivelabels_labels_disable` - Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
* `drivelabels_labels_enable` - Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
* `drivelabels_labels_list` - List labels.
* `drivelabels_labels_publish` - Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
* `drivelabels_labels_revisions_locks_list` - Lists the LabelLocks on a Label.
* `drivelabels_labels_revisions_permissions_batch_delete` - Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `drivelabels_labels_revisions_permissions_batch_update` - Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `drivelabels_labels_revisions_permissions_create` - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `drivelabels_labels_revisions_permissions_delete` - Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `drivelabels_labels_revisions_permissions_list` - Lists a Label's permissions.
* `drivelabels_labels_revisions_update_permissions` - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `drivelabels_labels_update_label_copy_mode` - Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.

### limits

* `drivelabels_limits_get_label` - Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

### users

* `drivelabels_users_get_capabilities` - Gets the user capabilities.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
