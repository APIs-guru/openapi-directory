package shared

// ListBrandsResponse
// Response message for ListBrands.
type ListBrandsResponse struct {
	Brands []Brand `json:"brands,omitempty"`
}
