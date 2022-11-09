import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DicomStore } from "./dicomstore";


// ListDicomStoresResponse
/** 
 * Lists the DICOM stores in the given dataset.
**/
export class ListDicomStoresResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dicomStores", elemType: shared.DicomStore })
  dicomStores?: DicomStore[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
