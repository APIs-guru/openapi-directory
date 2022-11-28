import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBillsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BillIds" })
  billIds?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BillStage" })
  billStage?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BillStagesExcluded" })
  billStagesExcluded?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BillType" })
  billType?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CurrentHouse" })
  currentHouse?: shared.HouseEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DepartmentId" })
  departmentId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IsDefeated" })
  isDefeated?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IsWithdrawn" })
  isWithdrawn?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MemberId" })
  memberId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OriginatingHouse" })
  originatingHouse?: shared.OriginatingHouseEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SearchTerm" })
  searchTerm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Session" })
  session?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SortOrder" })
  sortOrder?: shared.BillSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Take" })
  take?: number;
}


export class GetBillsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBillsQueryParams;
}


export class GetBillsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  billSummarySearchResult?: shared.BillSummarySearchResult;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
