import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LicenseAssignment
/** 
 * Representation of a license assignment.
**/
export class LicenseAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etags" })
  etags?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=productName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=skuId" })
  skuId?: string;

  @SpeakeasyMetadata({ data: "json, name=skuName" })
  skuName?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
