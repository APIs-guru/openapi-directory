import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBillsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=BillIds" })
  billIds?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=BillStage" })
  billStage?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=BillStagesExcluded" })
  billStagesExcluded?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=BillType" })
  billType?: number[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=CurrentHouse" })
  currentHouse?: shared.HouseEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DepartmentId" })
  departmentId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IsDefeated" })
  isDefeated?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IsWithdrawn" })
  isWithdrawn?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MemberId" })
  memberId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OriginatingHouse" })
  originatingHouse?: shared.OriginatingHouseEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SearchTerm" })
  searchTerm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Session" })
  session?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SortOrder" })
  sortOrder?: shared.BillSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Take" })
  take?: number;
}


export class GetBillsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBillsQueryParams;
}


export class GetBillsResponse extends SpeakeasyBase {
  @Metadata()
  billSummarySearchResult?: shared.BillSummarySearchResult;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
