import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDescriptionXml2PathParams extends SpeakeasyBase {
    serverId: string;
}
export declare class GetDescriptionXml2Request extends SpeakeasyBase {
    pathParams: GetDescriptionXml2PathParams;
}
export declare class GetDescriptionXml2Response extends SpeakeasyBase {
    contentType: string;
    getDescriptionXml2200TextXmlBinaryString?: Uint8Array;
    statusCode: number;
}
