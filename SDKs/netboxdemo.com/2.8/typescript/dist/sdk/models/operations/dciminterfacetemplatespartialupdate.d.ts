import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfaceTemplatesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimInterfaceTemplatesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimInterfaceTemplatesPartialUpdatePathParams;
    request: shared.WritableInterfaceTemplateInput;
}
export declare class DcimInterfaceTemplatesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    interfaceTemplate?: shared.InterfaceTemplate;
    statusCode: number;
}
