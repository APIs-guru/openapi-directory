import { SpeakeasyBase } from "../../../internal/utils";
import { DicomStore } from "./dicomstore";
/**
 * Lists the DICOM stores in the given dataset.
**/
export declare class ListDicomStoresResponse extends SpeakeasyBase {
    dicomStores?: DicomStore[];
    nextPageToken?: string;
}
