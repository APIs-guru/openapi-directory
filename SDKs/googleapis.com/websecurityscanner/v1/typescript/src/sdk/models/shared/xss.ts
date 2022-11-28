import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum XssAttackVectorEnum {
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


// Xss
/** 
 * Information reported for an XSS.
**/
export class Xss extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attackVector" })
  attackVector?: XssAttackVectorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=stackTraces" })
  stackTraces?: string[];

  @SpeakeasyMetadata({ data: "json, name=storedXssSeedingUrl" })
  storedXssSeedingUrl?: string;
}
