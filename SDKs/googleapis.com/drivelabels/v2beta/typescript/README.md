# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { DrivelabelsLabelsCreateRequest, DrivelabelsLabelsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DrivelabelsLabelsCreateRequest = {
  queryParams: {
    dollarXgafv: "1",
    accessToken: "quia",
    alt: "json",
    callback: "consectetur",
    fields: "omnis",
    key: "at",
    languageCode: "et",
    oauthToken: "sed",
    prettyPrint: true,
    quotaUser: "cum",
    uploadType: "at",
    uploadProtocol: "fugit",
    useAdminAccess: false,
  },
  request: {
    appliedCapabilities: {
      canApply: true,
      canRead: true,
      canRemove: true,
    },
    appliedLabelPolicy: {
      copyMode: "COPY_APPLIABLE",
    },
    creator: {
      person: "ea",
    },
    disabler: {
      person: "totam",
    },
    displayHints: {
      disabled: true,
      hiddenInSearch: true,
      priority: "enim",
      shownInApply: false,
    },
    fields: [
      {
        appliedCapabilities: {
          canRead: true,
          canSearch: true,
          canWrite: true,
        },
        creator: {
          person: "quas",
        },
        dateOptions: {
          dateFormatType: "DATE_FORMAT_UNSPECIFIED",
          maxValue: {
            day: 5616634297539951106,
            month: 1389370168788228999,
            year: 2467105181836640230,
          },
          minValue: {
            day: 477525113881419882,
            month: 4908732067574768779,
            year: 6967081247951840472,
          },
        },
        disabler: {
          person: "ipsa",
        },
        displayHints: {
          disabled: false,
          hiddenInSearch: true,
          required: true,
          shownInApply: false,
        },
        lifecycle: {
          disabledPolicy: {
            hideInSearch: false,
            showInApply: true,
          },
        },
        properties: {
          displayName: "quis",
          insertBeforeField: "assumenda",
          required: false,
        },
        publisher: {
          person: "consequatur",
        },
        schemaCapabilities: {
          canDelete: false,
          canDisable: true,
          canEnable: false,
          canUpdate: true,
        },
        selectionOptions: {
          choices: [
            {
              appliedCapabilities: {
                canRead: false,
                canSearch: true,
                canSelect: false,
              },
              creator: {
                person: "adipisci",
              },
              disabler: {
                person: "reprehenderit",
              },
              displayHints: {
                badgeColors: {
                  backgroundColor: {
                    alpha: 20.100000,
                    blue: 69.199997,
                    green: 81.099998,
                    red: 88.199997,
                  },
                  foregroundColor: {
                    alpha: 38.200001,
                    blue: 85.099998,
                    green: 67.099998,
                    red: 64.099998,
                  },
                  soloColor: {
                    alpha: 85.199997,
                    blue: 9.200000,
                    green: 29.200001,
                    red: 51.099998,
                  },
                },
                badgePriority: "sunt",
                darkBadgeColors: {
                  backgroundColor: {
                    alpha: 85.199997,
                    blue: 48.099998,
                    green: 75.099998,
                    red: 71.099998,
                  },
                  foregroundColor: {
                    alpha: 79.099998,
                    blue: 15.200000,
                    green: 95.199997,
                    red: 87.199997,
                  },
                  soloColor: {
                    alpha: 75.199997,
                    blue: 23.200001,
                    green: 50.099998,
                    red: 72.099998,
                  },
                },
                disabled: false,
                hiddenInSearch: false,
                shownInApply: false,
              },
              id: "non",
              lifecycle: {
                disabledPolicy: {
                  hideInSearch: false,
                  showInApply: false,
                },
              },
              properties: {
                badgeConfig: {
                  color: {
                    alpha: 21.200001,
                    blue: 96.099998,
                    green: 11.200000,
                    red: 1.200000,
                  },
                  priorityOverride: "a",
                },
                description: "quia",
                displayName: "aut",
                insertBeforeChoice: "soluta",
              },
              publisher: {
                person: "aut",
              },
              schemaCapabilities: {
                canDelete: false,
                canDisable: true,
                canEnable: false,
                canUpdate: false,
              },
              updater: {
                person: "pariatur",
              },
            },
          ],
          listOptions: {
            maxEntries: 3791495815245397066,
          },
        },
        updater: {
          person: "molestiae",
        },
        userOptions: {
          listOptions: {
            maxEntries: 2503627642135452943,
          },
        },
      },
      {
        appliedCapabilities: {
          canRead: false,
          canSearch: true,
          canWrite: true,
        },
        creator: {
          person: "rerum",
        },
        dateOptions: {
          dateFormatType: "LONG_DATE",
          maxValue: {
            day: 1909886773700121370,
            month: 7494288104748988191,
            year: 153419209594285167,
          },
          minValue: {
            day: 789858951537355929,
            month: 5875717815415457979,
            year: 1699122590662142008,
          },
        },
        disabler: {
          person: "fugiat",
        },
        displayHints: {
          disabled: true,
          hiddenInSearch: true,
          required: true,
          shownInApply: true,
        },
        lifecycle: {
          disabledPolicy: {
            hideInSearch: true,
            showInApply: true,
          },
        },
        properties: {
          displayName: "quo",
          insertBeforeField: "vel",
          required: true,
        },
        publisher: {
          person: "sunt",
        },
        schemaCapabilities: {
          canDelete: true,
          canDisable: true,
          canEnable: false,
          canUpdate: true,
        },
        selectionOptions: {
          choices: [
            {
              appliedCapabilities: {
                canRead: false,
                canSearch: true,
                canSelect: false,
              },
              creator: {
                person: "autem",
              },
              disabler: {
                person: "porro",
              },
              displayHints: {
                badgeColors: {
                  backgroundColor: {
                    alpha: 61.200001,
                    blue: 17.200001,
                    green: 37.200001,
                    red: 17.200001,
                  },
                  foregroundColor: {
                    alpha: 25.100000,
                    blue: 56.200001,
                    green: 41.099998,
                    red: 43.099998,
                  },
                  soloColor: {
                    alpha: 91.199997,
                    blue: 57.200001,
                    green: 50.200001,
                    red: 47.200001,
                  },
                },
                badgePriority: "nostrum",
                darkBadgeColors: {
                  backgroundColor: {
                    alpha: 95.199997,
                    blue: 81.099998,
                    green: 69.099998,
                    red: 77.099998,
                  },
                  foregroundColor: {
                    alpha: 99.199997,
                    blue: 67.099998,
                    green: 46.200001,
                    red: 7.100000,
                  },
                  soloColor: {
                    alpha: 51.099998,
                    blue: 50.200001,
                    green: 71.099998,
                    red: 28.200001,
                  },
                },
                disabled: false,
                hiddenInSearch: false,
                shownInApply: true,
              },
              id: "repellat",
              lifecycle: {
                disabledPolicy: {
                  hideInSearch: false,
                  showInApply: false,
                },
              },
              properties: {
                badgeConfig: {
                  color: {
                    alpha: 47.200001,
                    blue: 41.099998,
                    green: 85.099998,
                    red: 0.200000,
                  },
                  priorityOverride: "veniam",
                },
                description: "eum",
                displayName: "dolorem",
                insertBeforeChoice: "ab",
              },
              publisher: {
                person: "qui",
              },
              schemaCapabilities: {
                canDelete: true,
                canDisable: true,
                canEnable: true,
                canUpdate: false,
              },
              updater: {
                person: "ut",
              },
            },
          ],
          listOptions: {
            maxEntries: 6891606198488508276,
          },
        },
        updater: {
          person: "odio",
        },
        userOptions: {
          listOptions: {
            maxEntries: 7642754204309316601,
          },
        },
      },
    ],
    labelType: "LABEL_TYPE_UNSPECIFIED",
    learnMoreUri: "corrupti",
    lifecycle: {
      disabledPolicy: {
        hideInSearch: false,
        showInApply: true,
      },
    },
    properties: {
      description: "et",
      title: "velit",
    },
    publisher: {
      person: "dolorum",
    },
    revisionCreator: {
      person: "maiores",
    },
    schemaCapabilities: {
      canDelete: true,
      canDisable: false,
      canEnable: false,
      canUpdate: true,
    },
  },
};

sdk.labels.drivelabelsLabelsCreate(req).then((res: DrivelabelsLabelsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### labels

* `drivelabelsLabelsCreate` - Creates a new Label.
* `drivelabelsLabelsDelta` - Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
* `drivelabelsLabelsDisable` - Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
* `drivelabelsLabelsEnable` - Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
* `drivelabelsLabelsList` - List labels.
* `drivelabelsLabelsPublish` - Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
* `drivelabelsLabelsRevisionsLocksList` - Lists the LabelLocks on a Label.
* `drivelabelsLabelsRevisionsPermissionsBatchDelete` - Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `drivelabelsLabelsRevisionsPermissionsBatchUpdate` - Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `drivelabelsLabelsRevisionsPermissionsCreate` - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `drivelabelsLabelsRevisionsPermissionsDelete` - Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `drivelabelsLabelsRevisionsPermissionsList` - Lists a Label's permissions.
* `drivelabelsLabelsRevisionsUpdatePermissions` - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `drivelabelsLabelsUpdateLabelCopyMode` - Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.

### limits

* `drivelabelsLimitsGetLabel` - Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

### users

* `drivelabelsUsersGetCapabilities` - Gets the user capabilities.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
