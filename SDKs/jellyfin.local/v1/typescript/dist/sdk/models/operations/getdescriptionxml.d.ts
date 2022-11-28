import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDescriptionXmlPathParams extends SpeakeasyBase {
    serverId: string;
}
export declare class GetDescriptionXmlRequest extends SpeakeasyBase {
    pathParams: GetDescriptionXmlPathParams;
}
export declare class GetDescriptionXmlResponse extends SpeakeasyBase {
    contentType: string;
    getDescriptionXml200TextXmlBinaryString?: Uint8Array;
    statusCode: number;
}
