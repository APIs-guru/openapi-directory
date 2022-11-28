import { SpeakeasyBase } from "../../../internal/utils";
import { FormAction } from "./formaction";
import { OpenLink } from "./openlink";
/**
 * An onclick action (e.g. open a link).
**/
export declare class OnClick extends SpeakeasyBase {
    action?: FormAction;
    openLink?: OpenLink;
}
