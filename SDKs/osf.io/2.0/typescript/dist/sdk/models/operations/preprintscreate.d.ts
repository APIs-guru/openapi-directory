import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The properties of the preprint entity.
**/
export declare class PreprintsCreatePreprintAttributesInput extends SpeakeasyBase {
    doi?: string;
    licenseRecord?: string;
    subjects?: string[];
}
/**
 * URLs to other entities or entity collections that have a relationship to the preprint entity.
**/
export declare class PreprintsCreatePreprintRelationshipsInput extends SpeakeasyBase {
    license?: string;
    node: string;
    primaryFile: string;
    provider: string;
}
export declare class PreprintsCreatePreprintInput extends SpeakeasyBase {
    attributes?: PreprintsCreatePreprintAttributesInput;
    relationships: PreprintsCreatePreprintRelationshipsInput;
    type: string;
}
export declare class PreprintsCreateRequest extends SpeakeasyBase {
    request: PreprintsCreatePreprintInput;
}
export declare class PreprintsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
