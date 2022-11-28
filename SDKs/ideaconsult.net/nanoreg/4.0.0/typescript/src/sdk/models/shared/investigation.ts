import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Investigation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_childDocuments_" })
  childDocuments?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=assay" })
  assay?: string;

  @SpeakeasyMetadata({ data: "json, name=document_uuid" })
  documentUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=effectendpoint" })
  effectendpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointcategory" })
  endpointcategory?: string;

  @SpeakeasyMetadata({ data: "json, name=err" })
  err?: number;

  @SpeakeasyMetadata({ data: "json, name=errQualifier" })
  errQualifier?: string;

  @SpeakeasyMetadata({ data: "json, name=guidance" })
  guidance?: string;

  @SpeakeasyMetadata({ data: "json, name=investigation" })
  investigation?: string;

  @SpeakeasyMetadata({ data: "json, name=loQualifier" })
  loQualifier?: string;

  @SpeakeasyMetadata({ data: "json, name=loValue" })
  loValue?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_name" })
  ownerName?: string;

  @SpeakeasyMetadata({ data: "json, name=publicname" })
  publicname?: string;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=reference_owner" })
  referenceOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=reference_year" })
  referenceYear?: string;

  @SpeakeasyMetadata({ data: "json, name=resulttype" })
  resulttype?: string;

  @SpeakeasyMetadata({ data: "json, name=s_uuid" })
  sUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=studyResultType" })
  studyResultType?: string;

  @SpeakeasyMetadata({ data: "json, name=substanceType" })
  substanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=textValue" })
  textValue?: string;

  @SpeakeasyMetadata({ data: "json, name=topcategory" })
  topcategory?: string;

  @SpeakeasyMetadata({ data: "json, name=type_s" })
  typeS?: string;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=upQualifier" })
  upQualifier?: string;

  @SpeakeasyMetadata({ data: "json, name=upValue" })
  upValue?: number;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;
}
