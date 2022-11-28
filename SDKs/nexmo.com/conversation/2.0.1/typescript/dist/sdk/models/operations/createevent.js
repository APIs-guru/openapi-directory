var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var CreateEventPathParams = /** @class */ (function (_super) {
    __extends(CreateEventPathParams, _super);
    function CreateEventPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" }),
        __metadata("design:type", String)
    ], CreateEventPathParams.prototype, "conversationId", void 0);
    return CreateEventPathParams;
}(SpeakeasyBase));
export { CreateEventPathParams };
// CreateEventRequestBody
/**
 * Create New Event Request Payload Object
**/
var CreateEventRequestBody = /** @class */ (function (_super) {
    __extends(CreateEventRequestBody, _super);
    function CreateEventRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", Map)
    ], CreateEventRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], CreateEventRequestBody.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], CreateEventRequestBody.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateEventRequestBody.prototype, "type", void 0);
    return CreateEventRequestBody;
}(SpeakeasyBase));
export { CreateEventRequestBody };
// CreateEvent201ApplicationJson
/**
 * Create New Event Response Payload Object
**/
var CreateEvent201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateEvent201ApplicationJson, _super);
    function CreateEvent201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], CreateEvent201ApplicationJson.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateEvent201ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], CreateEvent201ApplicationJson.prototype, "timestamp", void 0);
    return CreateEvent201ApplicationJson;
}(SpeakeasyBase));
export { CreateEvent201ApplicationJson };
var CreateEventRequest = /** @class */ (function (_super) {
    __extends(CreateEventRequest, _super);
    function CreateEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEventPathParams)
    ], CreateEventRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateEventRequestBody)
    ], CreateEventRequest.prototype, "request", void 0);
    return CreateEventRequest;
}(SpeakeasyBase));
export { CreateEventRequest };
var CreateEventResponse = /** @class */ (function (_super) {
    __extends(CreateEventResponse, _super);
    function CreateEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateEventResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateEventResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEvent201ApplicationJson)
    ], CreateEventResponse.prototype, "createEvent201ApplicationJsonObject", void 0);
    return CreateEventResponse;
}(SpeakeasyBase));
export { CreateEventResponse };
