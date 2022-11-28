import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DomainTypeEnum {
    Classification = "Classification",
    ObjectDetection = "ObjectDetection"
}
export declare class Domain extends SpeakeasyBase {
    enabled?: boolean;
    exportable?: boolean;
    id?: string;
    name?: string;
    type?: DomainTypeEnum;
}
