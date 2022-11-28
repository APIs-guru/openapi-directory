import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetHealthQueryParams extends SpeakeasyBase {
    bundles?: boolean;
    plugins?: boolean;
}
export declare class GetHealthRequest extends SpeakeasyBase {
    queryParams: GetHealthQueryParams;
}
export declare class GetHealthResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
