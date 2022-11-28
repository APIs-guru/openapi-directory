import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * A binding parameter for a GQL query.
**/
export declare class GqlQueryParameter extends SpeakeasyBase {
    cursor?: string;
    value?: Value;
}
