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
    
    req := operations.DrivelabelsLabelsCreateRequest{
        QueryParams: operations.DrivelabelsLabelsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "quia",
            Alt: "json",
            Callback: "consectetur",
            Fields: "omnis",
            Key: "at",
            LanguageCode: "et",
            OauthToken: "sed",
            PrettyPrint: true,
            QuotaUser: "cum",
            UploadType: "at",
            UploadProtocol: "fugit",
            UseAdminAccess: false,
        },
        Request: &shared.GoogleAppsDriveLabelsV2betaLabelInput{
            AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities{
                CanApply: true,
                CanRead: true,
                CanRemove: true,
            },
            AppliedLabelPolicy: &shared.GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy{
                CopyMode: "COPY_APPLIABLE",
            },
            Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "ea",
            },
            Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "totam",
            },
            DisplayHints: &shared.GoogleAppsDriveLabelsV2betaLabelDisplayHints{
                Disabled: true,
                HiddenInSearch: true,
                Priority: "enim",
                ShownInApply: false,
            },
            Fields: []shared.GoogleAppsDriveLabelsV2betaFieldInput{
                shared.GoogleAppsDriveLabelsV2betaFieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                        CanRead: true,
                        CanSearch: true,
                        CanWrite: true,
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "quas",
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: "DATE_FORMAT_UNSPECIFIED",
                        MaxValue: &shared.GoogleTypeDate{
                            Day: 5616634297539951106,
                            Month: 1389370168788228999,
                            Year: 2467105181836640230,
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: 477525113881419882,
                            Month: 4908732067574768779,
                            Year: 6967081247951840472,
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "ipsa",
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints{
                        Disabled: false,
                        HiddenInSearch: true,
                        Required: true,
                        ShownInApply: false,
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                            HideInSearch: false,
                            ShowInApply: true,
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2betaFieldProperties{
                        DisplayName: "quis",
                        InsertBeforeField: "assumenda",
                        Required: false,
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "consequatur",
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities{
                        CanDelete: false,
                        CanDisable: true,
                        CanEnable: false,
                        CanUpdate: true,
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: false,
                                    CanSearch: true,
                                    CanSelect: false,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "adipisci",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "reprehenderit",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 20.100000,
                                            Blue: 69.199997,
                                            Green: 81.099998,
                                            Red: 88.199997,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 38.200001,
                                            Blue: 85.099998,
                                            Green: 67.099998,
                                            Red: 64.099998,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 85.199997,
                                            Blue: 9.200000,
                                            Green: 29.200001,
                                            Red: 51.099998,
                                        },
                                    },
                                    BadgePriority: "sunt",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 85.199997,
                                            Blue: 48.099998,
                                            Green: 75.099998,
                                            Red: 71.099998,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 79.099998,
                                            Blue: 15.200000,
                                            Green: 95.199997,
                                            Red: 87.199997,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 75.199997,
                                            Blue: 23.200001,
                                            Green: 50.099998,
                                            Red: 72.099998,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: false,
                                    ShownInApply: false,
                                },
                                ID: "non",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 21.200001,
                                            Blue: 96.099998,
                                            Green: 11.200000,
                                            Red: 1.200000,
                                        },
                                        PriorityOverride: "a",
                                    },
                                    Description: "quia",
                                    DisplayName: "aut",
                                    InsertBeforeChoice: "soluta",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "aut",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: true,
                                    CanEnable: false,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "pariatur",
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 3791495815245397066,
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "molestiae",
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 2503627642135452943,
                        },
                    },
                },
                shared.GoogleAppsDriveLabelsV2betaFieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                        CanRead: false,
                        CanSearch: true,
                        CanWrite: true,
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "rerum",
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: "LONG_DATE",
                        MaxValue: &shared.GoogleTypeDate{
                            Day: 1909886773700121370,
                            Month: 7494288104748988191,
                            Year: 153419209594285167,
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: 789858951537355929,
                            Month: 5875717815415457979,
                            Year: 1699122590662142008,
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "fugiat",
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints{
                        Disabled: true,
                        HiddenInSearch: true,
                        Required: true,
                        ShownInApply: true,
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                            HideInSearch: true,
                            ShowInApply: true,
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2betaFieldProperties{
                        DisplayName: "quo",
                        InsertBeforeField: "vel",
                        Required: true,
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "sunt",
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities{
                        CanDelete: true,
                        CanDisable: true,
                        CanEnable: false,
                        CanUpdate: true,
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: false,
                                    CanSearch: true,
                                    CanSelect: false,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "autem",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "porro",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 61.200001,
                                            Blue: 17.200001,
                                            Green: 37.200001,
                                            Red: 17.200001,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 25.100000,
                                            Blue: 56.200001,
                                            Green: 41.099998,
                                            Red: 43.099998,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 91.199997,
                                            Blue: 57.200001,
                                            Green: 50.200001,
                                            Red: 47.200001,
                                        },
                                    },
                                    BadgePriority: "nostrum",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 95.199997,
                                            Blue: 81.099998,
                                            Green: 69.099998,
                                            Red: 77.099998,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 99.199997,
                                            Blue: 67.099998,
                                            Green: 46.200001,
                                            Red: 7.100000,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 51.099998,
                                            Blue: 50.200001,
                                            Green: 71.099998,
                                            Red: 28.200001,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: false,
                                    ShownInApply: true,
                                },
                                ID: "repellat",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 47.200001,
                                            Blue: 41.099998,
                                            Green: 85.099998,
                                            Red: 0.200000,
                                        },
                                        PriorityOverride: "veniam",
                                    },
                                    Description: "eum",
                                    DisplayName: "dolorem",
                                    InsertBeforeChoice: "ab",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "qui",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: true,
                                    CanDisable: true,
                                    CanEnable: true,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "ut",
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 6891606198488508276,
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "odio",
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 7642754204309316601,
                        },
                    },
                },
            },
            LabelType: "LABEL_TYPE_UNSPECIFIED",
            LearnMoreURI: "corrupti",
            Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                    HideInSearch: false,
                    ShowInApply: true,
                },
            },
            Properties: &shared.GoogleAppsDriveLabelsV2betaLabelProperties{
                Description: "et",
                Title: "velit",
            },
            Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "dolorum",
            },
            RevisionCreator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "maiores",
            },
            SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities{
                CanDelete: true,
                CanDisable: false,
                CanEnable: false,
                CanUpdate: true,
            },
        },
    }
    
    res, err := s.Labels.DrivelabelsLabelsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2betaLabel != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### labels

* `DrivelabelsLabelsCreate` - Creates a new Label.
* `DrivelabelsLabelsDelta` - Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
* `DrivelabelsLabelsDisable` - Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
* `DrivelabelsLabelsEnable` - Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
* `DrivelabelsLabelsList` - List labels.
* `DrivelabelsLabelsPublish` - Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
* `DrivelabelsLabelsRevisionsLocksList` - Lists the LabelLocks on a Label.
* `DrivelabelsLabelsRevisionsPermissionsBatchDelete` - Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `DrivelabelsLabelsRevisionsPermissionsBatchUpdate` - Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `DrivelabelsLabelsRevisionsPermissionsCreate` - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `DrivelabelsLabelsRevisionsPermissionsDelete` - Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `DrivelabelsLabelsRevisionsPermissionsList` - Lists a Label's permissions.
* `DrivelabelsLabelsRevisionsUpdatePermissions` - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `DrivelabelsLabelsUpdateLabelCopyMode` - Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.

### limits

* `DrivelabelsLimitsGetLabel` - Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

### users

* `DrivelabelsUsersGetCapabilities` - Gets the user capabilities.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
