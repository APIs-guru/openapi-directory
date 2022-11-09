import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum SchemaTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    ProtocolBuffer = "PROTOCOL_BUFFER",
    Avro = "AVRO"
}
/**
 * A schema resource.
**/
export declare class Schema extends SpeakeasyBase {
    definition?: string;
    name?: string;
    revisionCreateTime?: string;
    revisionId?: string;
    type?: SchemaTypeEnum;
}
