import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfaceTemplatesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimInterfaceTemplatesReadRequest extends SpeakeasyBase {
    pathParams: DcimInterfaceTemplatesReadPathParams;
}
export declare class DcimInterfaceTemplatesReadResponse extends SpeakeasyBase {
    contentType: string;
    interfaceTemplate?: shared.InterfaceTemplate;
    statusCode: number;
}
