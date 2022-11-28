import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { RevisionSpec } from "./revisionspec";
/**
 * RevisionTemplateSpec describes the data a revision should have when created from a template. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
**/
export declare class RevisionTemplate extends SpeakeasyBase {
    metadata?: ObjectMeta;
    spec?: RevisionSpec;
}
