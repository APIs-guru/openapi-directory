import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GooglePrivacyDlpV2ByteContentItemTypeEnum {
    BytesTypeUnspecified = "BYTES_TYPE_UNSPECIFIED",
    Image = "IMAGE",
    ImageJpeg = "IMAGE_JPEG",
    ImageBmp = "IMAGE_BMP",
    ImagePng = "IMAGE_PNG",
    ImageSvg = "IMAGE_SVG",
    TextUtf8 = "TEXT_UTF8",
    WordDocument = "WORD_DOCUMENT",
    Pdf = "PDF",
    PowerpointDocument = "POWERPOINT_DOCUMENT",
    ExcelDocument = "EXCEL_DOCUMENT",
    Avro = "AVRO",
    Csv = "CSV",
    Tsv = "TSV"
}


// GooglePrivacyDlpV2ByteContentItem
/** 
 * Container for bytes to inspect or redact.
**/
export class GooglePrivacyDlpV2ByteContentItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GooglePrivacyDlpV2ByteContentItemTypeEnum;
}
