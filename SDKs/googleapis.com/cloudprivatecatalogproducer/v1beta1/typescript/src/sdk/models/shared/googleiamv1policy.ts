import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleIamV1AuditConfig } from "./googleiamv1auditconfig";
import { GoogleIamV1Binding } from "./googleiamv1binding";



// GoogleIamV1Policy
/** 
 * An Identity and Access Management (IAM) policy, which specifies access
 * controls for Google Cloud resources.
 * 
 * 
 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
 * `members` to a single `role`. Members can be user accounts, service accounts,
 * Google groups, and domains (such as G Suite). A `role` is a named list of
 * permissions; each `role` can be an IAM predefined role or a user-created
 * custom role.
 * 
 * Optionally, a `binding` can specify a `condition`, which is a logical
 * expression that allows access to a resource only if the expression evaluates
 * to `true`. A condition can add constraints based on attributes of the
 * request, the resource, or both.
 * 
 * **JSON example:**
 * 
 *     {
 *       "bindings": [
 *         {
 *           "role": "roles/resourcemanager.organizationAdmin",
 *           "members": [
 *             "user:mike@example.com",
 *             "group:admins@example.com",
 *             "domain:google.com",
 *             "serviceAccount:my-project-id@appspot.gserviceaccount.com"
 *           ]
 *         },
 *         {
 *           "role": "roles/resourcemanager.organizationViewer",
 *           "members": ["user:eve@example.com"],
 *           "condition": {
 *             "title": "expirable access",
 *             "description": "Does not grant access after Sep 2020",
 *             "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
 *           }
 *         }
 *       ],
 *       "etag": "BwWWja0YfJA=",
 *       "version": 3
 *     }
 * 
 * **YAML example:**
 * 
 *     bindings:
 *     - members:
 *       - user:mike@example.com
 *       - group:admins@example.com
 *       - domain:google.com
 *       - serviceAccount:my-project-id@appspot.gserviceaccount.com
 *       role: roles/resourcemanager.organizationAdmin
 *     - members:
 *       - user:eve@example.com
 *       role: roles/resourcemanager.organizationViewer
 *       condition:
 *         title: expirable access
 *         description: Does not grant access after Sep 2020
 *         expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
 *     - etag: BwWWja0YfJA=
 *     - version: 3
 * 
 * For a description of IAM and its features, see the
 * [IAM documentation](https://cloud.google.com/iam/docs/).
**/
export class GoogleIamV1Policy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auditConfigs", elemType: GoogleIamV1AuditConfig })
  auditConfigs?: GoogleIamV1AuditConfig[];

  @SpeakeasyMetadata({ data: "json, name=bindings", elemType: GoogleIamV1Binding })
  bindings?: GoogleIamV1Binding[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
