import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfaceTemplatesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimInterfaceTemplatesUpdateRequest extends SpeakeasyBase {
    pathParams: DcimInterfaceTemplatesUpdatePathParams;
    request: shared.WritableInterfaceTemplateInput;
}
export declare class DcimInterfaceTemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    interfaceTemplate?: shared.InterfaceTemplate;
    statusCode: number;
}
