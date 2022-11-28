import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfaceTemplatesCreateRequest extends SpeakeasyBase {
    request: shared.WritableInterfaceTemplateInput;
}
export declare class DcimInterfaceTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    interfaceTemplate?: shared.InterfaceTemplate;
    statusCode: number;
}
