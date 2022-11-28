import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UsageRule
/** 
 * Usage configuration rules for the service. NOTE: Under development. Use this rule to configure unregistered calls for the service. Unregistered calls are calls that do not contain consumer project identity. (Example: calls that do not contain an API key). By default, API methods do not allow unregistered calls, and each method call must be identified by a consumer project identity. Use this rule to allow/disallow unregistered calls. Example of an API that wants to allow unregistered calls for entire service. usage: rules: - selector: "*" allow_unregistered_calls: true Example of a method that wants to allow unregistered calls. usage: rules: - selector: "google.example.library.v1.LibraryService.CreateBook" allow_unregistered_calls: true
**/
export class UsageRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowUnregisteredCalls" })
  allowUnregisteredCalls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector?: string;

  @SpeakeasyMetadata({ data: "json, name=skipServiceControl" })
  skipServiceControl?: boolean;
}
