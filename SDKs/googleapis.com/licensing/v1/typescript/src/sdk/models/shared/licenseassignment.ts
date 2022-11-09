import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LicenseAssignment
/** 
 * Representation of a license assignment.
**/
export class LicenseAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=etags" })
  etags?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=productName" })
  productName?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=skuId" })
  skuId?: string;

  @Metadata({ data: "json, name=skuName" })
  skuName?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
