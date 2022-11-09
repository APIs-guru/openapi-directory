import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class MbusApiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    textError?: string;
    yaml?: string;
}
