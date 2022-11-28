import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1GcsDocuments } from "./googleclouddocumentaiv1gcsdocuments";
import { GoogleCloudDocumentaiV1GcsPrefix } from "./googleclouddocumentaiv1gcsprefix";
/**
 * The common config to specify a set of documents used as input.
**/
export declare class GoogleCloudDocumentaiV1BatchDocumentsInputConfig extends SpeakeasyBase {
    gcsDocuments?: GoogleCloudDocumentaiV1GcsDocuments;
    gcsPrefix?: GoogleCloudDocumentaiV1GcsPrefix;
}
