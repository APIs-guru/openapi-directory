import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1CustomersIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1CustomersIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1CustomersIdPathParams;
}
export declare class GetSetupV1CustomersIdResponse extends SpeakeasyBase {
    contentType: string;
    customerViewModel?: shared.CustomerViewModel;
    statusCode: number;
}
