import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DicomStore } from "./dicomstore";



// ListDicomStoresResponse
/** 
 * Lists the DICOM stores in the given dataset.
**/
export class ListDicomStoresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dicomStores", elemType: DicomStore })
  dicomStores?: DicomStore[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
