import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrismaCpeCode } from "./prismacpecode";


export enum PrismaConfigPrismaTypeEnum {
    PrismaTypeUnspecified = "PRISMA_TYPE_UNSPECIFIED",
    PrismaTypeDisplay = "PRISMA_TYPE_DISPLAY",
    PrismaTypeSearch = "PRISMA_TYPE_SEARCH",
    PrismaTypeVideo = "PRISMA_TYPE_VIDEO",
    PrismaTypeAudio = "PRISMA_TYPE_AUDIO",
    PrismaTypeSocial = "PRISMA_TYPE_SOCIAL",
    PrismaTypeFee = "PRISMA_TYPE_FEE"
}


// PrismaConfig
/** 
 * Settings specific to the Mediaocean Prisma tool.
**/
export class PrismaConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prismaCpeCode" })
  prismaCpeCode?: PrismaCpeCode;

  @SpeakeasyMetadata({ data: "json, name=prismaType" })
  prismaType?: PrismaConfigPrismaTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: string;
}
