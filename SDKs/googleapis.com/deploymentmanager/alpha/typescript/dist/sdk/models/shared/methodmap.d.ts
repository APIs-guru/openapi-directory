import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deployment Manager will call these methods during the events of creation/deletion/update/get/setIamPolicy
**/
export declare class MethodMap extends SpeakeasyBase {
    create?: string;
    delete?: string;
    get?: string;
    setIamPolicy?: string;
    update?: string;
}
