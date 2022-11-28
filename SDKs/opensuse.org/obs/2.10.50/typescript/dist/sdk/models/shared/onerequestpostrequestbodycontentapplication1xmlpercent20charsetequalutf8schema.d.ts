import { SpeakeasyBase } from "../../../internal/utils";
export declare class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionOptions extends SpeakeasyBase {
    sourceupdate?: string;
}
export declare class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionSource extends SpeakeasyBase {
    package?: string;
    project?: string;
    rev?: number;
}
export declare class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionTarget extends SpeakeasyBase {
    package?: string;
    project?: string;
}
export declare class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaAction extends SpeakeasyBase {
    options?: OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionOptions;
    source?: OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionSource;
    target?: OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionTarget;
    type?: string;
}
export declare class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaHistory extends SpeakeasyBase {
    comment?: string;
    description?: string;
    when?: string;
    who?: string;
}
export declare class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaReview1 extends SpeakeasyBase {
    byUser?: string;
    state?: string;
    when?: string;
    who?: string;
}
export declare class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaReview2 extends SpeakeasyBase {
    byGroup?: string;
    state?: string;
    when?: string;
    who?: string;
}
export declare class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaReview3 extends SpeakeasyBase {
    byProject?: string;
    state?: string;
    when?: string;
    who?: string;
}
export declare class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaReview4 extends SpeakeasyBase {
    byPackage?: string;
    state?: string;
    when?: string;
    who?: string;
}
export declare class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaState extends SpeakeasyBase {
    comment?: string;
    name?: string;
    when?: string;
    who?: string;
}
export declare class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8Schema extends SpeakeasyBase {
    action?: OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaAction;
    creator?: string;
    description?: string;
    history?: OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaHistory[];
    id?: number;
    review?: any[];
    state?: OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaState;
}
