import { SpeakeasyBase } from "../../../internal/utils";
export declare enum XssAttackVectorEnum {
    AttackVectorUnspecified = "ATTACK_VECTOR_UNSPECIFIED",
    LocalStorage = "LOCAL_STORAGE",
    SessionStorage = "SESSION_STORAGE",
    WindowName = "WINDOW_NAME",
    Referrer = "REFERRER",
    FormInput = "FORM_INPUT",
    Cookie = "COOKIE",
    PostMessage = "POST_MESSAGE",
    GetParameters = "GET_PARAMETERS",
    UrlFragment = "URL_FRAGMENT",
    HtmlComment = "HTML_COMMENT",
    PostParameters = "POST_PARAMETERS",
    Protocol = "PROTOCOL",
    StoredXss = "STORED_XSS",
    SameOrigin = "SAME_ORIGIN",
    UserControllableUrl = "USER_CONTROLLABLE_URL"
}
/**
 * Information reported for an XSS.
**/
export declare class Xss extends SpeakeasyBase {
    attackVector?: XssAttackVectorEnum;
    errorMessage?: string;
    stackTraces?: string[];
    storedXssSeedingUrl?: string;
}
