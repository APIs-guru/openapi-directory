package shared

// CopySheetToAnotherSpreadsheetRequest
// The request to copy a sheet across spreadsheets.
type CopySheetToAnotherSpreadsheetRequest struct {
	DestinationSpreadsheetID *string `json:"destinationSpreadsheetId,omitempty"`
}
